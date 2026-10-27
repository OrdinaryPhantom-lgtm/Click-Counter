// 1. get the 4 elements from the page (the number, plus, minus, reset)
// 2. make a variable called count that starts at 0
// 3. when plus is clicked: make count 1 bigger, then show it on the page
// 4. when minus is clicked: make count 1 smaller, then show it on the page
// 5. when reset is clicked: make count 0, then show it on the page

const count = document.getElementById('count');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

let countvalue = 0;

plus.addEventListener('click', function() {
    countvalue++;
    count.innerHTML = countvalue;
});

minus.addEventListener('click', function() {
    countvalue-- ;
    count.innerHTML = countvalue;
    if (countvalue < 0) {
        countvalue = 0;
        count.innerHTML = countvalue;
    }
});

reset.addEventListener('click', function() {
    countvalue = 0;
    count.innerHTML = countvalue;
});
 
