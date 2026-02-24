1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:- 
a. getElementById => Select one element by unique ID. It's returns a single element.
b. getElementsByClassName => Select all elements with a specific class. It's returns a live HTML collection.
c. querySelector => Select the first element matching any CSS selector. If no element matching, it's return null.
d. querySelectorAll => Select all elements matching any CSS selector. It's return a static NodeList.

2. How do you create and insert a new element into the DOM?
ans:-
first => Create the element using -- document.createElement();
then => Append to DOM -- appendChild();

3. What is Event Bubbling? And how does it work?
ans:- 
Even triggers on he child. This Event bubbles up to the parent. And it's continues up to the document & <html> unless stopped.

4. What is Event Delegation in JavaScript? Why is it useful?
ans:-
Add one event listener on a parent to handle events for all parent children. It's happens event bubbling.  
It's very useful because -  it's provide faster works, dynamic elements and cleaner code. 

5. What is the difference between preventDefault() and stopPropagation() methods?
ans:-
preventDefault() => Stops the default browser action of an element.
stopPropagation() => Stops the event from bubbling up to parent elements.
