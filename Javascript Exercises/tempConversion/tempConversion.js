const ftoc = function(temp) {
  let num = (temp-32)*5/9;
  return Number(num.toFixed(1));
  
}

const ctof = function(temp) {
  let num = (temp*9/5+32);
  return Number(num.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
