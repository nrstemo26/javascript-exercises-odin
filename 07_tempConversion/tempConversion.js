const ftoc = function(f) {
  return Math.round((f - 32) * 5 / 9 * 10) /10;

};

const ctof = function(c) {
  return (Math.round((c * 9/5)*10)/10 + 32)
  

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
