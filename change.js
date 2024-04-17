

// const btn = document.querySelector(".btn");
// const input1 = document.querySelector(".input1")
// const input2 = document.querySelector(".input2")



//  btn.addEventListener("click",function (){

//     const name = document.querySelector(".input1"). value;
//     const year = Number(document.querySelector(".input2").value);
//     const age = 2024 - year
    
//     if(age >= 18){
//         alert(`${name} is eligible to vote`)
//     }else{
//         alert(`${name} is not eligible to vote`)
//     }
//  })





// const input1 = document.querySelector(".input1")
// const input2 = document.querySelector(".input2")
// const btn = document.querySelector(".btn")


// btn.addEventListener ("click", function(){
//     const name = document.querySelector(".input1").value;
//     const year = Number(document.querySelector(".input2").value);
//     const age = 2024 - year

//     if(age >= 18){
//     alert(`${name} is eligible to vote`)

// }else{
//     alert(`${name} is not eligible to vote`)
// }
// })





// const correct = document.getElementById("correct")
// const button = document.querySelectorAll("button")

// for(let i = 0;i < button.length; i++){
//     button[i].addEventListener("click",() =>
//     {
//       const buttonValue = button[i].textContent;
//       if(buttonValue === "C")
//       {
//         clearResult ();
//       }
//         else if(buttonValue === "=")
//       {
//         calculateResult ();
//       }
//         else 
//       {
//         appendValue(buttonValue)
//       }
      
//     });

//      }
//       function clearResult()
//      {
//       result.value = "";
//      }
//      function calculateResult()
//      {
//      result.value = eval(result.value);
//     }
//     function appendValue(buttonValue)
//     {
//     result.value = result.value + buttonValue;
//     }






const button = document.querySelectorAll("button")
const result = document.getElementById("result")

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", () => 
    {
      const buttonValue = button[i].textContent;

       if(buttonValue === "C")
       {
         clearResult();
       }
       else if(buttonValue === "=")
       {
        calculateResult();
       }
       else
       {
        appendValue(buttonValue)
       }
       
    });
}
    function clearResult ()
    {
        result.value = "";
    }
    function calculateResult ()
    {
        result.value = eval(result.value);
    }
    function appendValue (buttonValue)
    {
      result.value = result.value + buttonValue ; 
    }
