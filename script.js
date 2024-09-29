let string = '';
let buttons = document.querySelectorAll("button");
let Input = document.getElementById("Input");


Array.from(buttons).forEach((button)=>{
  button.addEventListener("click" ,function(e){
    if(e.target.innerHTML == '='){
      string = eval(string);
      Input.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = '';
      Input.value = 0;
    }

    else if(e.target.innerHTML == 'DE'){
      string = string.slice(0,-1);
      Input.value = string;

    }

    // else if(e.target.innerHTML == '*'.length>1){
    //   alert("error")
    // }
    
    else{
      if (['*', '/', '.', '+' , '-' , '00'].includes(e.target.innerHTML) && string === '') {
        return 0;
      }
     
      string += e.target.innerHTML;
      Input.value = string;
    }

    
    
    
  })
})


