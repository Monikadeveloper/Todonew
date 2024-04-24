

const inputName = document.getElementById('inputName')
const inputTask = document.getElementById('inputTask')
const inputDate = document.getElementById('inputDate')
const addUserBtn = document.getElementById('addUserBtn')
const litext = document.getElementById('demo')

let userArray = []
let x = localStorage.getItem('users')
if (x !== null) {
  userArray = JSON.parse(x)
  showToDO()
}
// console.log('x', x)
let newArray = []
let localinprogress = localStorage.getItem('newusers')
if (localinprogress !== null) {
  newArray = JSON.parse(localinprogress)
  renderinprogress()
}

let newArray2 = []
let localcomplete = localStorage.getItem('finalusers')
if (localcomplete !== null) {
  newArray2 = JSON.parse(localcomplete)
  renderComplete()
}

function addToDO() {
  if (inputName.value == '' || inputTask.value == '' || inputDate.value == '') {
    alert('Please Enter values')
  } else {
    litext.innerHTML = ''
    const details = {
      id: new Date().getMilliseconds(),
      name: inputName.value,
      task: inputTask.value,
      date: inputDate.value,
    }

    userArray.push(details)
    // console.log(userArray)
    localStorage.setItem('users', JSON.stringify(userArray))
  }
  showToDO()
}

function showToDO() {
  for (let i = 0; i < userArray.length; i++) {
    var id = userArray[i].id

    litext.innerHTML += `<li> ${userArray[i].id} </br>
      ${userArray[i].name} </br>
      ${userArray[i].task} </br>
      ${userArray[i].date} </li>
      <button  class="btn btn-info todoCardBtn" onClick=\'moveToDo("${id}")\' >Next</button>`
  }
}
// let y = localStorage.getItem('newusers')
// if (y !== null) {
//   inprogress = JSON.parse(y)
// }
// // console.log('y', y)

function moveToDo(id) {
  // alert(id)
  let inprogress = userArray
    .filter(function (x) {
      return x.id == id
    })
    .map(function (userArray) {
      return userArray
    })
  // localStorage.setItem('newusers', JSON.stringify(inprogress))
  // console.log(newusers)

  inprogress.forEach(function (item) {
    newArray.push(item)
    localStorage.setItem('newusers', JSON.stringify(newArray))
  })
  renderinprogress()
  deleteToDo(id)
}

function renderinprogress(id) {
  document.getElementById('demo1').innerHTML = ''
  for (let i = 0; i < newArray.length; i++) {
    var id = newArray[i].id
    document.getElementById('demo1').innerHTML += `<li> ${newArray[i].id} </br>
      ${newArray[i].name} </br>
      ${newArray[i].task} </br>
      ${newArray[i].date} </li>
      <button  class="btn btn-info todoCardBtn" onClick=\'completeToDo("${id}")\' >Next</button>
      <button  class="btn btn-info todoCardBtn" onClick=\'previousPro("${id}")\' >Previous</button>`
  }
}

function completeToDo(id) {
  // alert(id)
  let complete = newArray
    .filter(function (x) {
      return x.id == id
    })
    .map(function (newArray) {
      return newArray
    })
  complete.forEach(function (item) {
    newArray2.push(item)
    localStorage.setItem('finalusers', JSON.stringify(newArray2))
  })
  renderComplete()
  finalToDo(id)
}

function renderComplete(id) {
  document.getElementById('demo2').innerHTML = ''
  for (let i = 0; i < newArray2.length; i++) {
    var id = newArray2[i].id
    document.getElementById('demo2').innerHTML += `<li> ${newArray2[i].id} </br>
      ${newArray2[i].name} </br>
      ${newArray2[i].task} </br>
      ${newArray2[i].date} </li>`
  }
}

function deleteToDo(id) {
  alert(id)
  let userslocal = JSON.parse(localStorage.getItem('users'))

  // console.log(userslocal)
  let index = userslocal.filter(function (x) {
    return x.id != id
  })

  // console.log(index)

  localStorage.setItem('users', JSON.stringify(index))
  location.reload()
}

function finalToDo(id) {
  let finallocal = JSON.parse(localStorage.getItem('newusers'))

  console.log(finallocal)
  let ind = finallocal.filter(function (x) {
    return x.id != id
  })
  localStorage.setItem('newusers', JSON.stringify(ind))
  location.reload()
}


function previousPro(id) {
  alert(id)
  let previousPro = JSON.parse(localStorage.getItem('newusers'))
  let firstindex = previousPro.filter(function (x) {
    return x.id == id
  })
  userArray = firstindex
  showToDO()
  deleteMiddle(id)
  renderinprogress(id)
  console.log(userArray)
  localStorage.setItem('newusers', JSON.stringify(newArray))
}
function deleteMiddle(id) {
  let deleteMiddle = JSON.parse(localStorage.getItem('newusers'))
  let deleteIndex = deleteMiddle.filter(function (x) {
    return x.id != id
  })
  newArray = deleteIndex

  localStorage.setItem('newusers', JSON.stringify(newArray))
}