let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset-btn");
let NewGameBtn = document.querySelector("#new-btn");
let MsgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let MsgContain = document.querySelector(".msg-contain");

let turn= true; //player-X, player-O
let count =0;


const winPatterns= [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8], 
    [0,5,8],
    [2,4,6],
    [0,4,8]
    //all 9 winning patterns
]

const resetGame =() => {
    MsgContain.classList.remove("hide");
    turn = true;
    enableboxes();
    MsgContainer.classList.add("hide");

}


boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    MsgContainer.classList.remove("hide");
    disableboxes();
    MsgContain.classList.add("hide");
  };


const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}


const showWinner = (winner)=>{
    msg.innerText = `Congrats! winner is ${winner}`;
    MsgContainer.classList.remove("hide");
    disableboxes();
    MsgContain.classList.add("hide");
}


const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }

    }
}


NewGameBtn.addEventListener("click",resetGame);
ResetBtn.addEventListener("click",resetGame);