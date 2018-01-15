// Katz Deli
// Ryan Roat
// Jan 15 2018

let katzDeliLine = [];

function takeANumber (katzDeliLine, newCust) {
  let l = katzDeliLine.length;
  
  katzDeliLine[l] = newCust;
  l++
  return `Welcome, ${newCust}. You are number ${l} in line.`;
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}