function scuberGreetingForFeet(distance) {
  // Write your code here!
  let result;

  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance <= 2000) {
    result = "That will be twenty bucks.";
  } else if (distance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city) {
  // Write your code here!
  let result = city === "NYC" ? "Ok, sounds good." : "No go.";
  return result;
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let result;

  switch (tip) {
    case "generous":
      result = "Thank you so much.";
      break
    case "not as generous":
      result = "Thank you.";
      break
    case "thanks for everything":
      result = "Bye.";
  }
  return result
}
