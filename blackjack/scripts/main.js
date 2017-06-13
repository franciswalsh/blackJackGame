/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  let totalValue = 0;
  for (let j in hand){
    if (hand[j] === 'A'){
      hand[j] = hand[hand.length-1];
      hand[hand.length-1] = "A";
    }
  }
  for (let i in hand){
      if (hand[i] === 'K' || hand[i] === 'Q' || hand[i] === 'J'){
        totalValue += 10;
      }
      else if (hand[i] === 'A'){
        if (totalValue > 11){
          totalValue += 1;
        }
        else {
          totalValue += 11;
        }
      }
      else {
        totalValue += parseInt(hand[i]);
      }
    }

  return totalValue;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
