/* Math in JS */

/* let round = Math.round(8.4);*/                                  /* Yaxlidlash */
/* let pow = Math.pow(4,3);*/          /* 4*4*4*4 */              /* Darajasini hisoblash */
/* let  sqrt = Math.sqrt(25);*/                                   /* Ildizini topish */
/* let abs = Math.abs(-12.9);*/                                   /* Absolut sonini topish */
/* let ceil = Math.ceil(49.1);*/                                  /* Yaxlitlash-2 */
/* let floor = Math.floor(49.9);*/                                /* Yaxlitlash-3 */
/* let trunc = Math.trunc(49.9); */                               /* Yaxlitlash-4 */
/* let min = Math.min(17,5,11,8,27,7,58.43);*/
/*let max = Math.max(17,5,11,8,27,7,58.43);*/
/*document.write();*/

/* DOM and styles in JS */
let byTag = document.getElementsByTagName("h1");
let byId = document.getElementById("idNomi");
let byClass = document.getElementsByClassName("classNomi")
let bySelector = document.querySelector("h1");
let bySelectorAll = document.querySelectorAll("classNomi")
let byAll = document.getElementsByName("h1").namedItem("idNomi");

byAll.style.color = "yellow";
byAll.style.backgroundColor = "blue";
byAll.style.width = "300px";
byAll.style.height = "250px";
byAll.style.fontSize = "45px";
byAll.style.paddingTop = "90px";
byAll.style.boxSizing = "border-box";
byAll.style.textAlign = "center";
byAll.style.border = "10px solid green";

console.log(byAll);
