// Katz Deli
// Ryan Roat
// Jan 15 2018

let katzDeliLine = [];

function takeANumber (katzDeliLine, newCust) {
  let l = katzDeliLine.length;
  
  katzDeliLine[l] = newCust;
  
  return l + 1;
}