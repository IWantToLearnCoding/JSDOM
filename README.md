# DOM crash course using vanilla JS

Find, traverse, create and manipulate html DOM using only vanilla JS.

***
## ELEMENT SELECTORS  

1. getElementById
2. getElementsByClassName
3. getElementsByTagName
4. querySelector
5. querySelectorAll

***
## TRAVERSING THE DOM

1. PARENT

    a. parentNode

    b. parentElement

2. CHILD

    a. childNodes

    b. children

    c.firstChild

    d. firstElementChild

    e. lastChild    

    f. lastChildElement

3. SIBLING

    a. nextSibling

    b. nextElementSibling

    c. previousSibling

    d. previousElementSibling

4. CREATEELMENT

    a. document.createElement('div')

    b. document.createTextNode('text of the node')

5. INSERTELEMENT

    a. element.appendChild(childToBeAppended)

    b. parentOfBoth.insertBefore(elementToBeInserted, elementToBeInsertedBefore)

### Important points -

> 1. What is a textNode and how every space in html document creates a text node under respective parentNode?
> 2. Difference between childNodes and children?
> 3. Difference between firstChild and firstElementChild?

***
## EVENTS

1. Adding an eventListener/handler

    find the element and attach the handler

```
    eventHandler = function(e) {
        // something;
    }
    var element = document.querySelector('css selector');
    element.addEventListener('event type', eventHandler);

```

### Important points -

>1. What is the difference between event.target and event.currentTarget?

[Read this] (https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property)
