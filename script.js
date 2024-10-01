let userInput= document.querySelector('#user-input')
let taskList = document.querySelector("#my-task")
let container = document.querySelector('.container')
let listArray = []
function addToList() {
    if (userInput.value === '') {
        alert('Enter something')
    } 
    else if(userInput.value === 'delete'){
        taskList.innerHTML = "";
        localStorage.clear();
    }
    else {
        let listItem = document.createElement('li')
        listItem.classList.add('list')
        listItem.innerHTML = userInput.value
        taskList.appendChild(listItem)
        container.classList.add('task-added');
        listArray.push(listItem)
        let cross = document.createElement('span')
        cross.innerHTML = '&Cross;'
        listItem.appendChild(cross)
        userInput.value = ''
        saveData();
    }
}

document.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        if (userInput.value === '') {
            alert('Enter something')
        } 
        else if(userInput.value === 'delete'){
            taskList.innerHTML = "";
            localStorage.clear();
        }else {
            let listItem = document.createElement('li')
            listItem.classList.add('list')
            listItem.innerHTML = userInput.value
            taskList.appendChild(listItem)
            container.classList.add('task-added');
            listArray.push(listItem)
            let cross = document.createElement('span')
            cross.innerHTML = '&Cross;'
            listItem.appendChild(cross)
            userInput.value = ''
            saveData();
        }
    }
})

setTimeout(()=>{
    alert("Write Delete to delete all the  task!!")
},5000)

document.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
        saveData();
    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove()
        listArray.pop()
        saveData();
        if(listArray.length === 0){
            container.classList.remove('task-added');
        }
    }
})
document.addEventListener('touchup', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
        saveData();
    } else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove()
        listArray.pop()
        saveData();
    }
})


function saveData() {
    localStorage.setItem('data', taskList.innerHTML)
}
function showData() {
    taskList.innerHTML = localStorage.getItem('data')
}
showData();

