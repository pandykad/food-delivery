import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { useNavigate } from 'react-router-dom'

export default function Card(props) {

  let navigate = useNavigate()

  let dispatch = useDispatchCart()
  let data = useCart()

  let options = props.options
  let priceOptions = Object.keys(options)
  const priceRef = useRef()

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")

  const handleAddToCart = async () => {
    let food = []
    for(const item of data){
      if(item.id === props.foodData._id){
        food = item
        break
      }
    }

    if(food !== []){
      if(food.size === size){
        await dispatch({type: 'UPDATE', id: props.foodData._id, price: finalPrice, qty: qty})
        return
      }
      else if(food.size !== size){
        await dispatch({
          type: 'ADD',
          id: props.foodData._id,
          name: props.foodData.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.foodData.img
        })
        return
      }
      return
    }

    await dispatch({
      type: 'ADD',
      id: props.foodData._id,
      name: props.foodData.name,
      price: finalPrice,
      qty: qty,
      size: size,
      img: props.foodData.img
    })
  }

  let finalPrice = qty * parseInt(options[size])

  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])
  
  return (
    <div>
        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
          <img className="card-img-top" src={props.foodData.img} alt="Card cap" style={{height:'150px', objectFit: 'fill'}} />
          <div className="card-body">
            <h5 className="card-title">{props.foodData.name}</h5>
            {/*<p className="card-text">{props.description}</p>*/}
            
            <div className="container w-100 p-0" style={{ height: "30" }}>
              <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onChange={(e) => setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                {priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>

              <div className="d-inline ms-2 h-100 w-20 fs-5">$ {finalPrice}</div>
            </div>
            <hr></hr>
            <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
    </div>
  );
}
