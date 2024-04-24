const inputName = document.getElementById('inputName')
const inputTask = document.getElementById('inputTask')
const inputDate = document.getElementById('inputDate')
var taskListArray = []

function saveTask() {
  const details = {
    id: new Date().getMilliseconds(),
    name: inputName.value,
    task: inputTask.value,
    date: inputDate.value,
  }
  taskListArray.push(details)
  renderTaskList()
  console.log(taskListArray)
}
function renderTaskList() {
  for (let i = 0; i < taskListArray.length; i++) {
    var dynamicList = document.createElement('li')

    dynamicList.classList.add('list-group-item')
    var myLabel = document.createElement('label')
    var myPara = document.createElement('p')
    myPara.textContent = taskListArray[i].value
    myLabel.appendChild(myPara)
    dynamicList.appendChild(myLabel)
    document.getElementById('task1').appendChild(dynamicList)
  }
}
