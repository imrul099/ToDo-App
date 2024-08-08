const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const addTask = () => {
    if (inputBox.value === '') {
        alert('Warning!!! Write Something')
    }
    else{
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement('span');
        span.innerHTML = '\u00d7'; //unicode html 
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData()
}


listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('cheaked');
        saveData()
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask()