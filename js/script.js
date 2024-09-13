window.onload = function () {
  const ContainerDiv = document.createElement("div");
  ContainerDiv.className =
    "contianer flex justify-center items-center flex-col h-screen gap-8";
  document.body.appendChild(ContainerDiv);
  const heading = document.createElement("h1");
  heading.textContent = "Dice Game";
  heading.className = "heading";
  ContainerDiv.appendChild(heading);
  const desc = document.createElement("p");
  desc.textContent = "lets play the game";
  ContainerDiv.appendChild(desc);

  const playArea = ContainerDiv.appendChild(document.createElement("div"));
  playArea.className = "flex gap-8 w-full justify-evenly";
  const playOneArea = playArea.appendChild(document.createElement("div"));
  playOneArea.className = "flex  flex-col gap-8";
  const diceArea = playArea.appendChild(document.createElement("div"));
  const playTwoArea = playArea.appendChild(document.createElement("div"));
  playTwoArea.className = "flex  flex-col gap-8";

  
  // playOneArea.innerText = "player 1"
  //  diceArea.innerText = "dice"
  // playTwoArea.innerText="player 2"

  const playerOneHeading = playOneArea.appendChild(
    document.createElement("h2")
  );
  playerOneHeading.innerText = "player 1";
  playerOneHeading.className = "text-3xl font-bold text-blue-500";
  const playerOneScore = playOneArea.appendChild(document.createElement("p"));
  playerOneScore.innerText = "0";
  playerOneScore.className = "text-5xl  text-center  font-bold  ";

  const playerTwoHeading = playTwoArea.appendChild(
    document.createElement("h2")
  );
  playerTwoHeading.innerText = "player 2";
  playerTwoHeading.className = "text-3xl font-bold text-blue-500";
  const playerTwoScore = playTwoArea.appendChild(document.createElement("p"));
  playerTwoScore.innerText = "0";
  playerTwoScore.className = "text-5xl  text-center  font-bold  ";

  const playerOneButton = playOneArea.appendChild(
    document.createElement("button")
  );
  playerOneButton.innerText = "Roll Now";
  playerOneButton.className =
    "bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded";

  const playerTwoButton = playTwoArea.appendChild(
    document.createElement("button")
  );
  playerTwoButton.innerText = "Roll Now";
  playerTwoButton.className =
    "bg-red-500 hover:bg-red-700  font-bold py-2 px-4 rounded ";

  const DiceImage = diceArea.appendChild(document.createElement("img"));
  diceArea.className = "w-48 h-68";
  DiceImage.src = "./images/inverted-dice-1.png";
  const resetBtn = ContainerDiv.appendChild(document.createElement("button"));
  resetBtn.innerText = "Reset Game";
  resetBtn.className =
    "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-8";
  function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    DiceImage.src = "./images/${diceValue}.png";
    return diceValue;
  }

};
