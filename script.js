let boxes = document.querySelectorAll(".box");

let turn = "X";
let isgameover= false;

boxes.forEach(e =>{
   e.innerHTML = ""
    e.addEventListener("click",()=>{
        if(!isgameover && e.innerHTML ===""){
            e.innerHTML = turn;
            cheakwin();
            cheakDraw();
            changeturn();
        }
    })
})
function changeturn(){
    if(turn==="X"){
        turn ="O";
        document.querySelector(".bg").style.left="85px";
    }
    else{
        turn="X";
        document.querySelector(".bg").style.left="0";
    }
    }
 function cheakwin(){
let winconditions= [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
for(let i = 0; i<winconditions.length; i++){
    let V0 = boxes[winconditions[i][0]].innerHTML;
    let V1 = boxes[winconditions[i][1]].innerHTML;
    let V2 = boxes[winconditions[i][2]].innerHTML;
    
    if(V0 !="" && V0 === V1 && V0 === V2){
    isgameover=true;
    document.querySelector("#results").innerHTML=turn+" win";
    document.querySelector("#play-again").style.display="inline"
    
    for(j =0; j<3; j++){
        boxes[winconditions[i][j]].style.backgroundcolor ="#08d9d6"
        boxes[winconditions[i][j]].style.color="#000"
    }
     
} 
}

}

function cheakDraw(){
if(! isgameover){
    let isdraw=true;
    boxes.forEach(e=>{
        if(e.innerHTML === "")isdraw = false;
    })
    if(isdraw){
        isgameover=true;
        document.querySelector("#results").innerHTML="draw";
        document.querySelector("#play-again").style.display="inline"
    }
    
    }
    }
    document.querySelector("#Play-again").addEventListener("click",()=>{
    isgameover = false;
    turn= "X";
    document.querySelector(".bg").style.left="0";
    document.querySelector("#results").innerHTML="";
    document.querySelector("#play-again").style.display ="none";

    boxes.forEach(e=>{
        e.innerHTML="";
        e.style.removeproperty("background-color");
        e.style.color="#fff"
        })
    })
