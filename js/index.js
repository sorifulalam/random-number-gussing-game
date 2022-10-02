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
const wonCount = document.getElementById("wonCount");
const loseCount = document.getElementById("loseCount");

let  winCount= 0;
let lossCount = 0;

wonCount.innerHTML(` Number of Won : ${winCount}`)
loseCount.innerHTML(` Number of Lost : ${lossCount}`)

