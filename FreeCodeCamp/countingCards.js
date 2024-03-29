/*
Count Change	Cards
+1:	2, 3, 4, 5, 6
0:	7, 8, 9
-1:	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/

let count = 0;

function cc(card) {
  // Only change code below this line
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            console.log("1", count);
            break;
        case 7:
        case 8:
        case 9:
            console.log("2", count);
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--; 
            console.log("3", count);
            break;
    }

    if (count <= 0) {
        card = "Hold";
    }
    else {
        card = "Bet";
    }


  return count + " " + card;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');