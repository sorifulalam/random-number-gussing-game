 //const  generate = Math.floor(Math.random() * 10) + 1;
const wonGuessing = document.getElementById("wonGuessing");

function getNumber(){
    const getNumber =document.getElementById("getNumber").value;
    const displayNumber = parseFloat(getNumber)
   console.log(displayNumber);
    document.getElementById("getNumber").value="";
    const enterGenerater =generateNUmber();
    console.log(enterGenerater);

    if(displayNumber == enterGenerater){
        
        alert("Congratulations You Have Won This Game", wonGuessing.innerHTML=`You Have Won!!! Random Number Was ${enterGenerater}`);
    }
   else{
       wonGuessing.innerHTML=`You Have lose!!! Random Number Was ${enterGenerater}`;
    }
} 

function generateNUmber(){
    return Math.floor(Math.random() * 10) + 1;
}

