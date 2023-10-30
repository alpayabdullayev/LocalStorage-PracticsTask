// const btn = document.getElementById("btn")
// const todoInp = document.querySelector(".todoInp")
// const container = document.querySelector(".container")

// let memoElmenet
// todoInp.focus()

// btn.addEventListener("click",(e)=>{
//     e.preventDefault()
    
//     const data = []
//     localStorage.setItem('data', JSON.stringify(data))

//     if (btn.textContent === "Add") {
//         if (todoInp.value === "") {
//             alert("doldurun")
//             return
//         }
//         const todoItem = document.createElement("div")
//         const todoItemText = document.createElement("div")
//         const todoItemEdit = document.createElement("button")
//         const todoItemTrash = document.createElement("button")

//         const todoObj = {
//             todoItem: todoInp.value
//         }
//         data.push(todoItem)
//         console.log(data);

//         todoItemText.textContent = todoInp.value
//         todoItemEdit.textContent = "Edit"
//         todoItemTrash.textContent = "X"

//         todoItem.classList.add("todoItem")
//         todoItemText.classList.add("todoItemText")  
//         todoItemEdit.classList.add("todoItemEdit")
//         todoItemTrash.classList.add("todoItemTrash")


//         todoItem.append(todoItemText, todoItemEdit, todoItemTrash)
//         container.append(todoItem)


//         todoItemTrash.onclick = () => todoItem.remove()

//         todoItemEdit.onclick = () => {
//             memoElmenet = todoItemText
//             todoInp.value = todoItemText.textContent
//             btn.textContent = "Edit"
//         }
//     }     
//     else 
//     {

//         if (memoElmenet) {
//             let index = data.findIndex(todo => todo.todoItem === memoElmenet.textContent);
//             if(index !== -1) {
//                 data[index].todoItem = todoInp.value;
//             }
    
//             localStorage.setItem('data', JSON.stringify(data)); 
//         }
//         memoElmenet.textContent = todoInp.value;
//         todoInp.value = "";
//         btn.textContent = "Add";
//     }
    

//     todoInp.value = ""


// })













