alert("I have not implemented some keys")
//input display
const display = document.getElementById("display")
//num pad
const num_keys = document.querySelectorAll(".numBTn")
//operation keys
const opp_keys = document.querySelectorAll(".oppBTn,.top,#equal,#topBtns .top");
// const calc_off = document.getElementById('off');
// const calc_on = document.getElementById('off');

//more operations
const top_key_operations = document.querySelectorAll("#topBtns .top");

//Get the key value when button clicked
num_keys.forEach((key)=>{
    key.addEventListener('click',(event)=>{
        if((display.value).length<=20 ){
           display.value += event.target.value;
        }       
})});

//operate on value in display when specific operation is  called
opp_keys.forEach(key=>{ 
key.addEventListener("click",event=>{
    
    switch(event.target.innerText){
        case "+":
            display.value +="+"
            break;
        case "-":
            display.value  += "-"
            break;
        case "*":
            display.value  += "*"
            break
        case "/":
            display.value += "/"
            break;
        case "=":
            try {
                //evaluate only if is number
                display.value !==NaN ?display.value = eval(display.value):display.value = ""
            } catch (SyntaxError) {
                display.value="syntax error" 
            }
            break;
    
        case "DEL":
            display.value=(display.value).slice(0,-1)
            break;

            case "sin":
                display.value = Math.sin(display.value)
                break;
        
            case "sin-":
                display.value = Math.asin(display.value)
               
                break;
        
            case "cos":
                display.value = Math.cos(display.value)
                break;
        
            case "tan":
                display.value = Math.tan(display.value);
                break;
        
            case "log":
                    display.value = Math.log(display.value);
                    break;
            case "%":
                    display.value /= 100;
                    break;
                    
            case "e":
                    display.value +="e" ;
                    break;
            case "^":
                    display.value +="^" ;
                    break;
            case "!":
               try {
                const factorial = number => number == 1?number:number*factorial(number-1);
                display.value = factorial(display.value);
               } catch (RangeError) {
                display.value="max recursion exceeded"; 
               }
               break;

        
    }
})

})

