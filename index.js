// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I will ${activity}!`;
}

function mondayWork(task = 'go to the office') {
  return `On Monday, I have to ${task}.`;
}

function wrapAdjective(flair = '*') {
  return function(adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`;
  }
}

const encouragingPromptFunction = wrapAdjective("%");
console.log(encouragingPromptFunction("a dedicated programmer")); // Output: "You are %a dedicated programmer%!"