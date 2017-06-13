function whoWon(yourHand){
  let dealersHandValue = Math.ceil(Math.rand * 21);
  let yourHandValue = handValue(yourHand);
  if (yourHandValue === 21){
    if (dealersHandValue === 21){
      console.log("You tie");
    } else {
      console.log("You win!");
    }
  } else if (dealersHandValue === yourHandValue ){
    console.log("You tie");
  } else if (yourHandValue > dealersHandValue){
    console.log("You win!");
  } else {
    console.log("You lose");
  }
}
