import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./Product"
import Cart from "./Cart"
import { useState } from "react"

function App() { 
const products =[
  
    {
        "name": "iPhone 14 Pro",
        "price": 999.99,
        "description": "The latest iPhone with a powerful A16 Bionic chip, 6.1-inch OLED display, and improved camera system."
    },
    {
        "name": "Samsung Galaxy S22",
        "price": 899.99,
        "description": "Flagship Samsung phone with Exynos 2200 processor, 6.2-inch Dynamic AMOLED screen, and versatile triple camera setup."
    },
    {
        "name": "Google Pixel 7",
        "price": 799.99,
        "description": "Google's newest smartphone featuring a Tensor G2 chip, 6.4-inch OLED display, and advanced AI camera capabilities."
    },
    {
        "name": "OnePlus 10 Pro",
        "price": 729.99,
        "description": "High-performance phone with Snapdragon 8 Gen 1, 6.7-inch Fluid AMOLED display, and Hasselblad-tuned cameras."
    },
    {
        "name": "Xiaomi Mi 12",
        "price": 649.99,
        "description": "Feature-packed smartphone with Snapdragon 8 Gen 1, 6.28-inch AMOLED display, and 50MP triple camera setup."
    },
    {
        "name": "Sony Xperia 1 IV",
        "price": 1199.99,
        "description": "Premium phone with Snapdragon 8 Gen 1, 6.5-inch 4K HDR OLED display, and pro-level camera technology."
    },
    {
        "name": "Oppo Find X5 Pro",
        "price": 1049.99,
        "description": "Sleek phone with Snapdragon 8 Gen 1, 6.7-inch AMOLED display, and advanced camera system with MariSilicon X imaging NPU."
    },
    {
        "name": "Huawei P50 Pro",
        "price": 999.99,
        "description": "Top-tier Huawei phone with Kirin 9000, 6.6-inch OLED display, and Leica-engineered quad camera system."
    },
    {
      "name":"vivo y12G",
      "price":2000,
      "description":"Premium phone with Snapdragon 8 Gen 1, 6.5-inch 4K HDR OLED display, and pro-level camera technology"
    }

]
const [total,setTotal]=useState(0)
const [items,setItems]=useState([])

let addItem =(product) =>{
setItems([...items,product])
setTotal(total+product.price)
}
let removeItem=(product)=>{
let index=items.findIndex(item=>item.name===product.name)
if(index != -1){
  items.splice(index,1)
  setItems([...items])
  setTotal(total - product.price)
}

}
  return (
    <>
    
      <div className="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item shop">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Shop
          </a>
          <ul className="dropdown-menu">
                      </ul>
        </li>
        </ul>
    </div>
  
  <div className="Head">
  <button type="button" class="btn btn-outline-dark">Cart
<i className="bi bi-cart-fill"></i>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
<button type="button" class="btn btn-dark">0</button>
</button></div>
</nav>
                <div className="text-white bg-dark text-center">
          <div className="card-body p-4">
          <h1>Shop in style</h1>
            <p>With this shop homepage template</p>
          </div>
                 </div>
                
        <div className="row">
           <div className="col-lg-8">
             <h1>Products</h1>
               <div className="d-flex flex-wrap">
                {
                  products.map((product) => {
                    return <Product product={product} addItem={addItem}/>
                  })
                }
               </div>
            </div>
          <div className="col-lg-4">
            <h1>Cart({items.length})</h1>
             <Cart  items={items} total={total} removeItem={removeItem}/>
          </div>
        </div>
      </div>
     
      <div class="container-fluid bg-dark text-center text-white p-5">
Copyright @ Your Website 2023
                 </div>
    </>
  )
}

export default App;
