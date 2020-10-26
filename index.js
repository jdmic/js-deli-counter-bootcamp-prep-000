
//apend new person to back of line
//return message 

function takeANumber(deliLine, person){
  deliLine.push(person);
  return `Welcome, ${person}. You are number ${deliLine.length} in line.`;
}


function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }else{
    var currentCustomer = katzDeliLine.shift();
    return `Currently serving ${currentCustomer}.`;
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  } else{
    var string = "The line is currently:";
    for(let i=1; i<katzDeliLine.length; i++){
      return `${string} ${i}. ${katzDeliLine[i-1]}, ${i+1}. ${katzDeliLine[i]}, ${i+2}. ${katzDeliLine[i+1]}`;
    }
  }
}