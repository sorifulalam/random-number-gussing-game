
let  winCount= 0;
let lossCount = 0;
let ranNumber =0;

function generateNew(){
    ranNumber = generateNUmber();
}

function Clear(){
    
    document.getElementById("wonCount").innerText="0";
    document.getElementById("loseCount").innerText="0";
    winCount= 0;
    lossCount = 0;

}

// const wonCount = document.getElementById("wonCount").innerText;
// const addwonCount = parseFloat(wonCount)

// const loseCount = document.getElementById("loseCount").innerText;
// const addlosCount= parseFloat(loseCount);
// const totalCount = lossCount+addlosCount;


// console.log(totalCount)
//Cought to showing paharagrap...
const wonGuessing = document.getElementById("wonGuessing");

//Click And condition full fill result show code ... 

function getNumber(){
    const getNumber =parseFloat(document.getElementById("getNumber").value);
   console.log(getNumber);
    document.getElementById("getNumber").value="";
    console.log(ranNumber);

    if(getNumber == ranNumber){
        
        alert("Congratulations You Have Won This Game", wonGuessing.innerHTML=`You Have Won!!! Random Number Was ${ranNumber}`);
        winCount++;
        document.getElementById("wonCount").innerText=winCount;
        
    }
   else{
       wonGuessing.innerHTML=`You Have lose!!! Random Number Was ${ranNumber} `;
       lossCount++;
       document.getElementById("loseCount").innerText=lossCount;
       
       
    }
   
} 

//Randome Number Generate ...

function generateNUmber(){
    return Math.floor(Math.random() * 10) + 1;
}
//Won Loos count 



// document.getElementById("loseCount").innerText = totalCount




//  document. wonCount.innerHTML(` Number of Won : ${winCount}`)
// document. loseCount.innerHTML(` Number of Lost : ${lossCount}`)


// function go(id  ){
//     const curent = document.getElementById(id).innerText
//     const curentNumber = parseFloat(curent)
//    const total = loseCount+lossCount
   
// }


// let  winCount= 0;
// let lossCount = 0;

// const wonCount = document.getElementById("wonCount").innerText;
// const addwonCount = parseFloat(wonCount)

// const loseCount = document.getElementById("loseCount").innerText;
// const addlosCount= parseFloat(loseCount);
// const totalCount = lossCount+addlosCount;

// console.log(totalCount)
// //Cought to showing paharagrap...
// const wonGuessing = document.getElementById("wonGuessing");

// //Click And condition full fill result show code ... 

// function getNumber(){
//     const getNumber =document.getElementById("getNumber").value;
//     const displayNumber = parseFloat(getNumber)
//    console.log(displayNumber);
//     document.getElementById("getNumber").value="";
//     const enterGenerater =generateNUmber();
//     console.log(enterGenerater);

//     if(displayNumber == enterGenerater){
        
//         alert("Congratulations You Have Won This Game", wonGuessing.innerHTML=`You Have Won!!! Random Number Was ${enterGenerater}`);
//         winCount++;
        
//     }
//    else{
//        wonGuessing.innerHTML=`You Have lose!!! Random Number Was ${enterGenerater} total win= ${winCount} total loss= ${lossCount}`;
//        lossCount++;
       
       
//     }
   
// } 

// //Randome Number Generate ...

// function generateNUmber(){
//     return Math.floor(Math.random() * 10) + 1;
// }
// //Won Loos count 



// //document.getElementById("loseCount").innerText = totalCount




// //  document. wonCount.innerHTML(` Number of Won : ${winCount}`)
// // document. loseCount.innerHTML(` Number of Lost : ${lossCount}`)


// // function go(id  ){
// //     const curent = document.getElementById(id).innerText
// //     const curentNumber = parseFloat(curent)
// //    const total = loseCount+lossCount
   
// // }





