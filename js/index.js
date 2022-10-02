//Cought to showing paharagrap...
const wonGuessing = document.getElementById("wonGuessing");

//Click And condition full fill result show code ... 

function getNumber(){
    const getNumber =document.getElementById("getNumber").value;
    const displayNumber = parseFloat(getNumber)
   console.log(displayNumber);
    document.getElementById("getNumber").value="";
    const enterGenerater =generateNUmber();
    console.log(enterGenerater);

    if(displayNumber == enterGenerater){
        
        alert("Congratulations You Have Won This Game", wonGuessing.innerHTML=`You Have Won!!! Random Number Was ${enterGenerater}`);
        winCount++
    }
   else{
       wonGuessing.innerHTML=`You Have lose!!! Random Number Was ${enterGenerater}`;
       lossCount++
       
    }
   
} 

//Randome Number Generate ...

function generateNUmber(){
    return Math.floor(Math.random() * 10) + 1;
}
//Won Loos count 
const wonCount = document.getElementById("wonCount").value;
const addwonCount = parseFloat(wonCount)
const loseCount = document.getElementById("loseCount").value;
const addlosCount= parseFloat(loseCount)

let  winCount= 0;
let lossCount = 0;

//  document. wonCount.innerHTML(` Number of Won : ${winCount}`)
// document. loseCount.innerHTML(` Number of Lost : ${lossCount}`)


function go(id  ){
    const curent = document.getElementById(id).innerText
    const curentNumber = parseFloat(curent)
   const total = loseCount+lossCount
   
}



