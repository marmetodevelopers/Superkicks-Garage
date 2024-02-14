

let simplCartFuntion = async () => {
  let carTurl = "https://www.superkicks.in/cart.json";
  const request = await fetch(carTurl);
  const response = await request.json();
  const items = response?.items;

  let value = false;
  for(let i in items){
    console.log(items[i].properties)
    if(items[i].properties.fcfs && items[i].properties.fcfs == "true" ){
      value = true
      break
    }
  }

  let simplDiv = document.querySelector("#simpl-checkout-cart-v2");
  let cartCheckout = document.querySelector("#checkout")


  if(value){
    cartCheckout.removeAttribute("style")
    simplDiv.setAttribute("style","display:none;")
  }else{
    simplDiv.removeAttribute("style")
    cartCheckout.setAttribute("style","display:none;")
  }
  
}
  
if(document.querySelector(".title-wrapper-with-link #main-cart-items")){

const m = new MutationObserver(() => {
  simplCartFuntion();
});  
  
m.observe(document.querySelector(".title-wrapper-with-link #main-cart-items"), {
  attributes: true,
  childList: true,
  subtree: true,
});
  
}else{
  console.log(" cart mutation on hold !!!")
}

simplCartFuntion();