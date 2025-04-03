// * ********************************* SWITCH CONDITION ***************************

// * switch condition are use to check for a match and if it see a match the statement inside the block is executed Example let say you to eat Apple then you go out to a fruit selling mob, so you start search from the beginning of the mob and when you see an Apple you buy and leave the mob

let fruit = "apple";

switch (fruit) {
  case "orange":
    console.log("i don't want oranges today")
    break;
  case "mango":
    console.log("well i am buying")
    break;
    case "apple":
      console.log("oh look at what I am craving for")
      break;
  default:
    console.log("So sad i can't find any Apple")
    break;
}


let partyDay = "wednesday"
let restingDay = "saturday";

switch (restingDay) {
  case "monday":
    console.log("what a beautiful day to begins the week");
    break;
  case "tuesday":
      console.log("tuesday are for meeting");
      break;
    case "wednesday":
      console.log(`I have a party on ${partyDay}`);
      break;
    case "thursday":
      console.log("We have a presentation on thursday");
      break;
    case "friday":
      console.log("Me and my friends are visiting the Mosque");
      break;
    case "saturday":
      console.log("I am spending time with my family today");
      break;
    case "sunday":
      console.log("sundays are for Church");
      break;
  default:
    console.log("That is not a valid day")
    break;
}

