const username = document.getElementById('username')
const adduserbtn = document.getElementById('addUserBtn')
const btntext = adduserbtn.innerText
const userDisplay = document.getElementById('display')

let userArray = []
let edit_id = null

let objstr = localStorage.getItem('users')

if (objstr != null) {
  userArray = JSON.parse(objstr)
}
displayInfo()

adduserbtn.onclick = () => {
  if (username.value === '') {
    alert('please enter something')
  } else {
    const name = username.value

    if (edit_id != null) {
      userArray.splice(edit_id, 1, { task: name })
      edit_id = null
    } else {
      userArray.push({ task: name })
    }
  }
  console.log(userArray)
  saveInfo(userArray)
  username.value = ''
  displayInfo()
  adduserbtn.innerText = btntext
}

function saveInfo(userArray) {
  let str = JSON.stringify(userArray)
  localStorage.setItem('users', str)
  displayInfo()
}

function displayInfo() {
  let statement = ''
  userArray.forEach((user, i) => {
    statement += ` <tr>
<th scope="row">${i + 1}</th>
<td>${user.task}</td>

<td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='editInfo(${i})'></i> <i class="btn btn-primary text-white fa fa-trash" onclick='deleteInfo(${i})'></i></td></tr>`
  })
  userDisplay.innerHTML = statement
}

function deleteInfo(id) {
  alert('Are you sure you want to delete', id)
  userArray.splice(id, 1)
  saveInfo(userArray)
}

function editInfo(id) {
  edit_id = id
  username.value = userArray[id].task
  adduserbtn.innerText = 'Save changes'
}
