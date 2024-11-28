const mongoose = require('mongoose')


const FoodModel = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    image: String
})

const Food = mongoose.model('food',FoodModel)

module.exports = Food;

const foods = [
    {
        name: "Classic Chicken Cheese Burger",
        description: "Juicy grilled chicken patty topped with melted cheese, fresh lettuce, and creamy mayo, served in a toasted bun.",
        price: 240,
        quantity: 1,
        image: "https://5.imimg.com/data5/TP/AI/GLADMIN-51695823/big-crunch-chicken-cheese-burger-1000x1000.png"
    },
    {
        name: "Grilled Salmon Steak",
        description: "Perfectly grilled salmon steak served with a side of buttery mashed potatoes and a zesty lemon butter sauce.",
        price: 560,
        quantity: 1,
        image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/05/Salmon-Steak-6.jpg"
    },
    {
        name: "Chocolate Brownie Sundae",
        description: "Warm fudgy brownie topped with creamy vanilla ice cream, drizzled with rich chocolate syrup and sprinkles.",
        price: 300,
        quantity: 1,
        image: "https://www.thereciperebel.com/wp-content/uploads/2022/05/brownie-sundae-TRR-1200-25-of-40.jpg"
    },
    {
        name: "Classic Beef Burger",
        description: "A succulent beef patty with fresh tomatoes, crisp lettuce, pickles, and a tangy special sauce in a toasted sesame bun.",
        price: 260,
        quantity: 1,
        image: "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2021/06/Beef-Burgers-083.jpg"
    },
    {
        name: "Alfredo Pasta",
        description: "Creamy fettuccine Alfredo pasta made with a rich parmesan sauce, garnished with parsley and a touch of garlic.",
        price: 320,
        quantity: 1,
        image: "https://www.allrecipes.com/thmb/B-OTFUgCWDzoqr9TH4sjY5AjdPY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-236973-CreamyAlfredoSauce-0238-4x3-1-01e7091f47ae452d991abe32cbed5921.jpg"
    },
    {
        name: "Grilled Chicken Sandwich",
        description: "Tender grilled chicken breast served with crisp lettuce, tomatoes, and a flavorful aioli on freshly baked bread.",
        price: 280,
        quantity: 1,
        image: "https://thefamilydinnerproject.org/wp-content/uploads/2014/07/Easy-grilled-chicken-sandwich.jpg"
    },
];

/*Food.insertMany(foods)
    .then(() => {
        console.log('Foods inserted successfully');
        mongoose.connection.close(); 
    })
    .catch(err => {
        console.error('Error inserting foods:', err);
        mongoose.connection.close(); 
    });

    */