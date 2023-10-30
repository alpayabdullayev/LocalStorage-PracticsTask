const btn = document.getElementById("btn")
const todoInp = document.querySelector(".todoInp")
const container = document.querySelector(".container")



let arr = JSON.parse(localStorage.getItem("arr")) ;
arr = []
// const todoArrLocalStorage = getLocalStorages("arr")




btn.addEventListener('click',(e)=>{
    
    
    if (todoInp.value === "") {
        alert("doldurun")
        return
    }       

    

    arr.push(todoInp.value) 

    


    localStorage.setItem("arr", JSON.stringify(arr))

    

    const todoItem = document.createElement("ul")
    const todoItemText = document.createElement("li")
    const todoItemCheck = document.createElement('input')

    todoItemText.textContent = todoInp.value

    todoItem.classList.add("todoItem")
    todoItemText.classList.add("todoItemText")  
    todoItemCheck.setAttribute('type', 'checkbox');

    todoItemCheck.onclick = ()=> todoItemCheck.checked ? todoItemText.style.textDecorationLine = 'line-through': todoItemText.style.textDecorationLine = 'none';

    todoItem.append(todoItemText,todoItemCheck)
    container.append(todoItem)

    todoInp.value = ""
})





// let body = document.querySelector('body')
// let form = document.getElementById('form')
// let username = document.getElementById('username')
// let password = document.getElementById('password')
// let btn = document.getElementById('btn')



// btn.addEventListener('click',(e)=>{

//     e.preventDefault()
//     console.log('salam');
//     const obj = {
//         username : username.value ,
//         password : password.value
//     }

//     window.localStorage.setItem("obj", JSON.stringify(obj))

// })
// let newObject = window.localStorage.getItem("obj");
// let user = JSON.parse(newObject);


// if (newObject) {
//     username.value = user.username ; 
//     password.value = user.password 
// }










// const username = document.getElementById('username');
// const password = document.getElementById('password');


// const usernameValue = username.value
// const passwordValue = password.value


// localStorage.setItem('username', username);
// localStorage.setItem('password', password);