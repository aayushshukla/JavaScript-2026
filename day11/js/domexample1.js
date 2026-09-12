const elements = document.getElementsByTagName("p");
console.log(elements);
document.getElementById("mydemo").innerHTML =
  "<h2> This is example of getElement By Tag Name  </h2> " +
  `<ul> 
     <li> ${elements[0].innerHTML}  
     </li>  <li> ${elements[1].innerHTML} </li> 
   </ul>`;

const paraElements = document.getElementsByClassName("para");
console.log(paraElements);

console.log("---------get by class name --------------------");

paraElements[1].innerHTML =
  "<h3> Get Element By Id : use getElementById() method </h3>"; // writing content of 1 index element of paraElements
paraElements[2].textContent =
  "Get elements on by of the tag using getElementsByTagName()";

console.log("---------query selector all --------------------");

const querySelectorElements = document.querySelectorAll("h1.para");
console.log(querySelectorElements);

console.log("---------query selector --------------------");

const querySelectorElement = document.querySelector("h1.para");
console.log(querySelectorElement);
