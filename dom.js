// VIDEO 1

console.dir(document);

// Questions
/**

VIDEO 1 - https://www.youtube.com/watch?v=0ik6X4DJKCc

** What is the node value?
 - https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue

** What is difference between textContent and innerText
-- look in video@17:50
- google it. textContent is better and faster. innerText pays attention to styling

**/
// element Selectors

// getElementById

var elem = document.getElementById('second-heading');
console.log(elem);
console.log(elem.style.color);
elem.style.borderBottom = 'solid 3px #000';  // css should be changed to camelCase.


// getElementsByClassName, it is not getElementByClass

var items = document.getElementsByClassName('list-item');
console.log(items);
console.log(items[0]);
items[1].textContent = 'Changed item 2';
items[1].style.backgroundColor = 'yellow';
// to change all the items in list, create a loop to go thru all of them


// GETELEMENTBYTAGNAME

var tagItems = document.getElementsByTagName('li');
console.log(tagItems);


//QUERYSELECTOR - mosty like jQuery and only grabs the first item in the list of htmlCollection
var query = document.querySelector('.list-item'); // we can use any css selector and pass it to querySelector
query.style.fontWeight = 700;

var lastQuery = document.querySelector('.list-item:last-child');
lastQuery.style.backgroundColor = 'red';

var nthQuery = document.querySelector('.list-item:nth-child(2)');
nthQuery.style.backgroundColor = 'green';


// QUERYSELECTORALL

var allQueries = document.querySelectorAll('.list-item');
console.log(allQueries);

var oddQueries = document.querySelectorAll('.list-item:nth-child(odd)'); // similar thing can be done using even
oddQueries.forEach(function (query) {
    query.style.backgroundColor = '#f4f4f4';
})


// VIDEO 2
// https://www.youtube.com/watch?v=mPd2aJXCZ2g
// TRAVERSING THE DOME

// PARENT
// parentNode
var itemsList = document.querySelector('#items');
console.log(itemsList.parentNode);
console.log(itemsList.parentNode.parentNode);

// parentElement - for the most part can be used interchangeably
console.log(itemsList.parentElement);
console.log(itemsList.parentElement.parentElement);

// CHILDREN

// childNodes
// Question - see what is a textNode and how every space in html document creates a text node under parentNode.
// Line breaks in html document also create textNodes.
console.log(itemsList.childNodes);

// children
// returns html elements and ignores all textNodes. See output difference between childNodes and children
console.log(itemsList.children);
console.log(itemsList.children[1]);

// See difference between firstChild and firstElementChild

// firstChild
console.log(itemsList.firstChild); // gives the first child which is a text node. Rather use firstElementChild.

// firstElementChild
console.log(itemsList.firstElementChild); // compare output difference with .firstChild

// lastChild and lastChildElement -- similar to firstChild and firstElementChild

// SIBLINGS

// nextSibling and nextElementSibling - similar to firstChild and firstElementChild
var nextSibling = document.querySelector('#second-heading');
console.log(nextSibling.nextSibling);
console.log(nextSibling.nextElementSibling);

// previousSibling and previousElementSibling

var prevSibling = document.querySelector('#items');
console.log(prevSibling.previousSibling);
console.log(prevSibling.previousElementSibling);

// CREATEELEMENT

// div node
var newDiv = document.createElement('div');
newDiv.class = 'new-div';
console.log(newDiv);
newDiv.id = 'new-div-id';
// add attribute
newDiv.setAttribute('myAttr', 'myValue');

// create text node
var textNode = document.createTextNode('I created this div');
console.log(textNode);
// add textNode to divNode
newDiv.appendChild(textNode);
console.log(newDiv);


// insert node
var container = document.querySelector('.container');
var secondHeading = document.getElementsByTagName('h1')[1];

container.insertBefore(newDiv, secondHeading);


// VIDEO 3 - https://www.youtube.com/watch?v=wK2cBMcDTss

// Adding events to DOM elements

var buttonClicked = function (e) {
    console.log(e);
    console.log(e.target); // gives the element clicked
    console.log(e.type);
    console.log(e.clientX); // from browser window
    console.log(e.clientY);
    console.log(e.offsetX); // from the element itself
    console.log(e.offsetY);

    console.log(e.altKey); // will be true if alt was held down when mouse clicked
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}
var button = document.getElementById('btn');
button.addEventListener('click', buttonClicked);
console.log(button); // addEventListener does not return anything. to remove the listerner use removeEventListener.


// DIFFERENT EVENTS
var innerbox = document.getElementById('inner-box');
var runEvent1 = function (e) {
    console.log('Event type: ', e.type);
}

var runEvent2 = function (e) {
    document.body.style.backgroundColor = "rgb("+e.offsetY+", "+e.offsetX+", 50)";
    innerbox.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 50)";
};

button.addEventListener('click', function () {});

// button.addEventListener('dblclick', runEvent1);
// button.addEventListener('mousedown', runEvent1);
// button.addEventListener('mouseup', runEvent1);
//
// var box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent1);
// box.addEventListener('mouseleave', runEvent1);
//
// box.addEventListener('mouseover', runEvent1);
// box.addEventListener('mouseout', runEvent1);

box.addEventListener('mousemove', runEvent2);

var inputEventHandler = function (e) {
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}

var input = document.querySelector('input[type="text"]');
input.style.marginTop = '100px';

input.addEventListener('keyup', inputEventHandler);


var secondInputHandler = function (element, event) {
    // console.log(this);
    console.log(element);
    console.log(event);
}

// focus and blur

// cut and paste

// input - anything we do on input element triggers input event.

// submit event on the form
