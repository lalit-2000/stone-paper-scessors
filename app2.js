let usercount = 0;
let compcount = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getcompchoice = (userchoice) => {
    const options = ["Rock","Paper","Scissors"];
    const idx = Math.floor(Math.random()*3);
    return options[idx];

};
const foundWinner = (compchoice,userchoice,userWin) =>{
    if(userchoice === "Rock"){
        // Paper,Scissors
      userWin =  compchoice === "Paper" ? false : true;
    }
    else if(userchoice === "Paper"){
        // Rock,Scissor
        userWin = compchoice === "Rock" ? true : false;
    }
    else if(userchoice === "Scissors"){
        // Rock,Paper
        userWin = compchoice === "Paper" ? true : false;
    }
    if (userWin){
        usercount++;
        userScorePara.innerText = usercount;
        msg.innerText = `You Won:) your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compcount++;
        compScorePara.innerText = compcount;
        msg.innerText = `You Lose:( ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};


drawgame = () => {
  msg.innerText = "Game was draw !";
  msg.style.backgroundColor = "#081b31";
  console.log("Game was draw!");
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
       const userchoice =  choice.getAttribute("id");
        let compchoice = getcompchoice(userchoice);
        if(userchoice === compchoice){
            drawgame();
        }
        else{ 
            let userWin = true;
             foundWinner(compchoice,userchoice,userWin);
        }

    })
});
