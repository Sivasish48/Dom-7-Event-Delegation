// 1. INTRODUCTION TO EVENT DELEGATION

// Event Delegation is an event handling pattern that allows users to append a Single event listener to a parent element that adds it to all of its present AND future descendants that match a selector.
// Event Deegation is a pattern based upon the concept of Event bubbling.
// By default , events triggered on an element propagate up the DOM tre to the element's parent , its ancestors and on up until the root element(html).
document.querySelector("#foods").addEventListener("click", function(e){
    const getid = e.target.getAttribute("id");
    console.log(` ${getid} is clicked `);

    const target = e.target;

    if (target.matches('button')) {
        target.textContent = ` ${getid} is clicked `;
    }
    
});

// 1.3 ADDING FUTURE DESCENDANTS
// So here below is an example of a future descendant to be in the process.

  const foods = document.querySelector('#foods');
  
  const newFood = document.createElement("button");
  
  newFood.innerText = "Hotdog";
  newFood.setAttribute('id','hotdog');

  foods.appendChild(newFood);

