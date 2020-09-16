
// function that will get the button's inputs
function getInputValue(){
    let input = event.target.innerText
    console.log(input);
    printValue(input);
}
// End


// add the onclick() event to every button
// get the button by their tag name
// use a loop to add to each button the onclick attribute
let buttons = document.getElementsByTagName('button');
console.log(buttons.length);
for(var i =0; i<buttons.length;i++){
    buttons[i].setAttribute('onclick','getInputValue()');
}
// End


// make our output function to print the text inside our result field

function printValue(val){
  let out = document.querySelector("#result");
  let current = out.innerHTML;
  if(out.innerHTML == "0"){
    
    if(val!= "C" && val!="DEL"){ 
      out.innerHTML ="";
      out.innerHTML += val;
    }
  }
  else{
    if(val == "DEL" ){
      console.log(current[current.length-1]);
      out.innerText = current.slice(0,-1);
      if(out.innerHTML.length <= 1){
        out.innerHTML = "0";
      }
    }
    if(val!= "C" && val!="DEL" && val!="="){ 
      out.innerHTML += val;
    }
    if(val =="="){
      let res = out.innerHTML;
      out.innerHTML = eval(res);
    }
    if(val == "C"){
      out.innerHTML = "0";
    }
  }
  
}
// End

// used the eval function to print the result
console.log(eval("(1+2)*6"))
// End