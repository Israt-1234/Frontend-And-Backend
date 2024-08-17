const express = require('express')
const app = express()
const mongoose = require("mongoose")
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//create schema
const productSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
    required : true
},
    description :{
        type : String,
        required : true
    },

    item : {
        type : Date,
        default : Date.now
    }
})
//create model
const productmodel = new mongoose.model("product", productSchema);

const connectdb = async ()=>{
 try{
    await mongoose.connect("mongodb://localhost:27017/testproductBD")
   console.log("db is connected");
 }catch(error){
    console.log("db is not connected");
    console.log(error.message);
    process.exit(1);
 }
}

app.get("/", (req, res)=>{
    res.send("hello, welcome to home page")
})

app.post("/products", async (req, res)=>{
   try{  //get data form req body
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;

    const newproduct = new productmodel({
      title:title,
      price:price,
      description: description
    });

    const productdata = await newproduct.save();

    res.status(202).send({
    productdata
    })
}catch(error){
    res.status(500).send({
        message : error.message
    });
   }
})
//logical operator
// price = 500
// {$and:[{price : {$gt:price}}, {rating : {$gt : 4}}]}

app.get("/products", async (req, res)=>{
   try{
   const products = await productmodel.find({price :{$lt: 300}});
   if(products){
    res.status(200).send(products);
   }
   else{
    res.status(500).send({
        message : 'product not found'
    })
   }
   }catch(error){
    res.status(500),send({message : error.message});
   }
})

app.get("/products:/id", async (req, res)=>{
    try{
        const id = req.params.id;
        const products = await productmodel.find({_id: id}).select({
            title:1,
             _id : 0, 
             price:1
        });
        res.send(products)
        // if(products){
        //     res.status(200).send(products);
        // }else{
        //     res.status(500).send({message: "products is not found"});
        // }
    }catch(error){
        res.status(500).send({message:error.message})
    }
})

app.listen(port, async ()=>{
    console.log(`server is running at http://localhost:${port}`)
    await connectdb();
})

app.delete("/products/:id", async (req, res)=>{
    try{
        const id = req.params.id;
       const product = await productmodel.deleteOne({_id:id}) 
    }catch(error){
        res.status(500).send({message : error.message});
    }

})

app.put("/products/:id",async (req, res)=>{
    try{
        const id = req.params.id;
      const updatedproduct =  await productmodel.updateOne({_id:id},{
            $set:{
                ratting: 4.8
            },
        })
    }catch(error){
    
    }
})
//database - collection - document
//post: /products - create a product
//get : /products/- return all the products
//get : /products/:id - return a specific products
//put: /products/:id - update a product based on id
//delete: /products/:id - delete a product based on id

