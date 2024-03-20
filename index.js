// code your solution here
const saturdayFun = (activity = "roller-skate") => `This Saturday, I want to ${activity}!`

const mondayWork = (activity = "go to the office") => `This Monday, I will ${activity}.`

module.exports = { saturdayFun, mondayWork }

function wrapAdjective(symbol = '*') {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  
  module.exports = {
    wrapAdjective,
  };
  