
const Cart = ({total,items,removeItem}) => {
  return (
    <div>
    <ol class="list-group list-group-numbered">
  {
    items.map((item)=>{
        return<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{item.name}</div>
      Rs{item.price}
    </div>
    <button onClick={()=>{
      removeItem(item)
    }} class="badge text-bg-primary rounded-pill">X</button>
  </li>
    })
  }
  
</ol>
<h1>Total :Rs{total}</h1>
</div>
  )
}

export default Cart;
