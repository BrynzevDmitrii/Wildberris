function cart(){
    const buttonCart = document.querySelector(".button-cart");
    const moduleCart = document.getElementById("modal-cart");
    const butnClose = moduleCart.querySelector(".modal-close")
    buttonCart.addEventListener('click', function() {
       moduleCart.style.display = "flex";

    })
    butnClose.addEventListener('click', ()=>{
        moduleCart.style.display = "";
    })
}
cart();