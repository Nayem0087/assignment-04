// calculate && count
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

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
    currentStatus = id;
    // console.log(selected);

    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-500', 'text-white')

    if(id == 'interview-filter-btn'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    } else if(id == 'all-filter-btn'){
        filteredSection.classList.add('hidden');
        allCards.classList.remove('hidden');
    } else if(id == 'rejected-filter-btn'){
        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        // renderRejected();
    } 
    // console.log(allCards.classList);
}
 

    mainContainer.addEventListener('click', function(event) {
        
        if(event.target.classList.contains('interview-btn')){
            const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const badge = parentNode.querySelector('.badge').innerText;
    const paragraph = parentNode.querySelector('.paragraph').innerText;

    parentNode.querySelector('.badge').innerText = 'INTERVIEW';

    const cardInfo = {
        companyName , 
        position, 
        salary, 
        badge: 'INTERVIEW', 
        paragraph
    }

    const companyExist = interviewList.find(
    item => item.companyName === cardInfo.companyName);


    if(!companyExist) {
        interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

    calculateCount();

    renderInterview();

        } else if(event.target.classList.contains('rejected-btn')){
            const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const badge = parentNode.querySelector('.badge').innerText;
    const paragraph = parentNode.querySelector('.paragraph').innerText;

    parentNode.querySelector('.badge').innerText = 'REJECTED';

    const cardInfo = {
        companyName , 
        position, 
        salary, 
        badge : 'REJECTED', 
        paragraph
    }

    const companyExist = rejectedList.find(
    item => item.companyName === cardInfo.companyName);


    if(!companyExist) {
        rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

    // if(currentStatus == 'interview-filter-btn'){
    //     renderInterview();
    // }

    calculateCount();

    renderRejected();

        }
    })

function renderInterview() {
    filteredSection.innerHTML = '';

    for(let interview of interviewList) {
        // console.log(interview);
        let div = document.createElement('div');
        div.className = 'bg-white shadow-lg p-5 rounded-lg mb-5';
        div.innerHTML = `
            <div class="flex justify-between">
                        <h3 class="company-name font-semibold text-[20px]">${interview.companyName}</h3>
                        <a href=""><img src="assets/Group 1.png" alt=""></a>
                    </div>
                    <h5 class="position text-[18px] text-gray-500">${interview.position}</h5>
                    <p class="salary flex gap-4 text-gray-500 py-3">
                        ${interview.salary}
                    </p>
                    <button class="badge bg-blue-50 px-3 py-2 my-2 text-[16px] rounded-sm">${interview.badge}</button>
                    <p class="paragraph text-[#323B49]">${interview.paragraph}</p>
                    <!-- btn -->
                     <div class="flex gap-5 pt-6 rounded-lg">
                        <button class="btn-interview btn btn-outline btn-primary">INTERVIEW</button>
                        <button class="btn-rejected btn btn-outline btn-error">REJECTED</button>
                     </div>
        `
        filteredSection.appendChild(div);
    }
}

function renderRejected() {
    filteredSection.innerHTML = '';

    for(let rejected of rejectedList) {
        // console.log(interview);
        let div = document.createElement('div');
        div.className = 'bg-white shadow-lg p-5 rounded-lg mb-5';
        div.innerHTML = `
            <div class="flex justify-between">
                        <h3 class="company-name font-semibold text-[20px]">${rejected.companyName}</h3>
                        <a href=""><img src="assets/Group 1.png" alt=""></a>
                    </div>
                    <h5 class="position text-[18px] text-gray-500">${rejected.position}</h5>
                    <p class="salary flex gap-4 text-gray-500 py-3">
                        ${rejected.salary}
                    </p>
                    <button class="badge bg-blue-50 px-3 py-2 my-2 text-[16px] rounded-sm">${rejected.badge}</button>
                    <p class="paragraph text-[#323B49]">${rejected.paragraph}</p>
                    <!-- btn -->
                     <div class="flex gap-5 pt-6 rounded-lg">
                        <button class="btn-interview btn btn-outline btn-primary">INTERVIEW</button>
                        <button class="btn-rejected btn btn-outline btn-error">REJECTED</button>
                     </div>
        `
        filteredSection.appendChild(div);
    }
}