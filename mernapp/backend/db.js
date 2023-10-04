const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ameyakale:mernchies@cluster0.vl6npam.mongodb.net/mernchies?retryWrites=true&w=majority"

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {useNewUrlParser : true})
        console.log("Connected")
        const fetchedData = await mongoose.connection.db.collection("food-items")
        const data = await fetchedData.find({}).toArray();
        
        const foodCategory = await mongoose.connection.db.collection('foodCategory')
        const foodCategoryData = await foodCategory.find({}).toArray()
        
        global.food_items = data;
        global.foodCategory = foodCategoryData;
        //console.log(global.food_items)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = mongoDB