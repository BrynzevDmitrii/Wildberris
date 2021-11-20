function search (){
    const input = document.querySelector(".search-block > input");
    const btnInput = document.querySelector(".search-block > button ");
    let txtInput = ''
    input.addEventListener('input', (event)=>{
         txtInput = event.target.value;
    });

    btnInput.addEventListener('click', ()=>{
        console.log(txtInput);
    })
};
search();