# The Cloud Kitchen

A food delivery app build using the MERN (MongoDB, Express.js, React.js, Node.js) Stack.

##

### The Application has the following features:
- User Authentication
- Storage of passwords in a secure and encrypted manner within the database
- Cart Management
- Content filtering based on food names
- Placing an Order
- Order history tracker
- Retrieving the current location through an API

##

### How the concepts are used:
#### React.js
- Diiferent components for Navbar, Footer and Cards are created
- The Cart is managed using Redux and useContext hook
- The food cards are generated using a mapping function over the data stored in DB
    - The Cards have respective state management for quantity and size
    - The price is tracked and updated using the useRef hook
- useEffect hook is used to fetch the data from the DB on the initial load up of the pages
- Used React Router and useNavigate hook to handle routings

#### Node.js and Express.js
- Created REST API to perform CRUD operations on the DB
- Made use of JWT tokens to store user information in caches
- Used Bcrypt.js to encrypt and decrypt passwords stored in the DB
- Axios was used to make API requests

#### MongoDB
- Developed a database schema and models using validators
- Successfully established a connection between Node.js and MongoDB using MongoURI and mongoose

##

<h2> Below is a small demo of the Application: </h2>

# Adding to Cart
![AddToCart-gif-high](https://github.com/AmeyaK17/MERNchies/blob/main/ReadMeGifs/AddToCart-High.gif)

# SignUp Page
![AddToCart-gif-high](https://github.com/AmeyaK17/MERNchies/blob/main/ReadMeGifs/signup.gif)

# Login Page and MyOders Page
![AddToCart-gif-high](https://github.com/AmeyaK17/MERNchies/blob/main/ReadMeGifs/Login.gif)
