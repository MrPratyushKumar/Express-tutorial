const express = require('express');

const app = express();

// root route 

app.get("/" , (req, res)=> {
  res.send("Welcome to our home page")
})

// get all products 
app.get('/products' , (req , res)=>{
  const products = [
    {
      id : 1,
      label : 'product 1'
    },
    {
      id : 2,
      label : 'product 2'
    },
    {
      id : 3,
      label : 'product 3'
    }
  ]
  res.json(products)
})

// get a single product - > Dynamic routing
app.get('/products/:id' , (req , res)=>{
  console.log("req.params" , req.params);
  const productId = parseInt(req.params.id)
  const products = [
    {
      id : 1,
      label : 'product 1'
    },
    {
      id : 2,
      label : 'product 2'
    },
    {
      id : 3,
      label : 'product 3'
    }
  ]

  const getSingleProduct = products.find(product=> product.id === productId)

  if(getSingleProduct){
    //found product
    res.json(getSingleProduct);
  } else{
    // product does not found 
    res.status(404).send('Produc is not found ! Please try with different id')
  }
})

const port = 3000;

app.listen(port , ()=> {
  console.log(`Server is now running at port ${port}`)
})