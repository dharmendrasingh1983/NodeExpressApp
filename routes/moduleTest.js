/* module.exports = {
  cal: function (a, b, c) {
    try {
      return eval(`${a}${b}${c}`);
    } catch (e) {
      return e.message;
    }

  }
}; */
/* module.exports=function(){
  return 1;
}; */

exports.cal = function (a, b, c) {
  try {
    return eval(`${a}${b}${c}`);
  } catch (e) {
    return e.message;
  }
};