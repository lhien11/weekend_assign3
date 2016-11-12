function evaluate({x: x, y: y, type: type}){
  console.log(x); // 1
  console.log(y); // 2
  console.log(type); // "add"
}

$(function(){
  evaluate({x: 1, y: 2, type: "add"});

});
