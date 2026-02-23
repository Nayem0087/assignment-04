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

const filteredSection = document.getElementById('filtered-section');

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

    if(id == 'interview-filter-btn'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    } else if(id == 'all-filter-btn'){
        filteredSection.classList.add('hidden');
        allCards.classList.remove('hidden');
    }
    console.log(allCards.classList);
}

// mainContainer.addEventListener('click', function(event) {
    // console.log(event.target.parentNode.parentNode);
    // const parentNode = event.target.parentNode.parentNode;
    // const companyName = parentNode.querySelector('.company-name').innerText;
    // const position = parentNode.querySelector('.position').innerText;
    // const salary = parentNode.querySelector('.salary').innerText;
    // const badge = parentNode.querySelector('.badge').innerText;
    // const paragraph = parentNode.querySelector('.paragraph').innerText;
    // // console.log(companyName , position, salary, badge, paragraph);

    // const cardInfo = {
    //     companyName , 
    //     position, 
    //     salary, 
    //     badge, 
    //     paragraph
    // }
    // // console.log(cardInfo);

    // const interviewExist = interviewList.find(item => item.company-name == cardInfo.company-name);

    // if(!interviewExist) {
    //     interviewList.push(cardInfo);
    //     renderInterview();
    // }
    // console.log(interviewList);

    mainContainer.addEventListener('click', function(event) {
        // console.log(event.target.classList.contains('interview-btn'));
        if(event.target.classList.contains('interview-btn')){
            const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const badge = parentNode.querySelector('.badge').innerText;
    const paragraph = parentNode.querySelector('.paragraph').innerText;
    // console.log(companyName , position, salary, badge, paragraph);

    const cardInfo = {
        companyName , 
        position, 
        salary, 
        badge, 
        paragraph
    }
    // console.log(cardInfo);

    const interviewExist = interviewList.find(item => item.company-name == cardInfo.company-name);

    // badge.classList.remove('bg-blue-50');

    parentNode.querySelector('.badge').innerHTML = `<button class="interview-btn btn btn-outline btn-primary">INTERVIEW</button>`;

    if(!interviewExist) {
        interviewList.push(cardInfo);
        renderInterview();
    }
        }
    })

function renderInterview() {
    filteredSection.innerHTML = '';

    for(let interview of interviewList) {
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'bg-white shadow-lg p-5 rounded-lg mb-5';
        div.innerHTML = `
            <div class="flex justify-between">
                        <h3 class="company-name font-semibold text-[20px]">Mobile First Corp</h3>
                        <a href=""><img src="assets/Group 1.png" alt=""></a>
                    </div>
                    <h5 class="position text-[18px] text-gray-500">React Native Developer</h5>
                    <p class="salary flex gap-4 text-gray-500 py-3">
                        <span>Remote</span>
                        <span>•</span>
                        <span>Full-time</span>
                        <span>•</span>
                        <span>$130,000 - $175,000</span>
                    </p>
                    <button class="badge bg-blue-50 px-3 py-2 my-2 text-[16px] rounded-sm">NOT APPLIED</button>
                    <p class="paragraph text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
                    <!-- btn -->
                     <div class="flex gap-5 pt-6 rounded-lg">
                        <button class="btn btn-outline btn-primary">INTERVIEW</button>
                        <button class="btn btn-outline btn-error">REJECTED</button>
                     </div>
        `
        filteredSection.appendChild(div);
    }
}