const  generate = Math.floor(Math.random() * 10);
const wonGuessing = document.getElementById("wonGuessing");

function getNumber(){
    const getNumber =document.getElementById("getNumber").value= " ";

    if(generate == getNumber){
        wonGuessing.innerHTML=`You Have Won!!! Random Number Was ${generate}`;

    }
    else{
        wonGuessing.innerHTML=`You Have lose!!! Random Number Was ${generate}`;
    }
}
