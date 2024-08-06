function Product({product ,addItem}){
    return <div className="col"> 
       <div class="card" style={{width: "12rem"}}>
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."/>
       
           <div class="card-body">
      <h5 class="card-title">{product.name}</h5>
          <h6>Rs {product.price}</h6>        
          <button onClick={()=>{
            addItem(product)
          }} class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
    
    
}

export default Product;