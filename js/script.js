// calculate && count
let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

// console.log(totalCount, interviewCount, rejectedCount);

const allCards = document.getElementById('all-cards');
// console.log(allCards.children.length);

const mainContainer = document.querySelector('main');
// console.log(mainContainer);

function calculateCount() {
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
    // console.log('click', id);
    allFilterBtn.classList.remove('bg-blue-500',  'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500',  'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500',  'text-white');

    allFilterBtn.classList.add('bg-white',  'text-black');
    interviewFilterBtn.classList.add('bg-white',  'text-black');
    rejectedFilterBtn.classList.add('bg-white',  'text-black');

    const selected = document.getElementById(id)
    console.log(selected);

    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')
}