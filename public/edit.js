const taskEditId  = document.querySelector('.task-id')
const editForm   = document.querySelector('.taskForm')
const formAlert = document.querySelector('.form-alert')
const taskEditName = document.querySelector(".task-edit-name")
const taskEditCompleted  = document.querySelector('.task-completed')
const params = window.location.search
const id  = new URLSearchParams(params).get('id')

const showTask = async ()=>{
  try{
     const{data:{task}} = await axios.get(`/api/v1/tasks/${id}`)
     const {_id:taskId,completed,taskName} = task
     
     taskEditId.textContent = taskId
     taskEditName.value = taskName 
     if(completed){
     	taskEditCompleted.checked = true
     }
  }
  catch(err){
    console.log(err)
  }
}
showTask()
editForm.addEventListener('submit',async (e)=>{
     e.preventDefault();
     try{
       const tName = taskEditName.value 
       const tCompleted = taskEditCompleted.checked
       const {data:{task}} = await axios.patch(`/api/v1/tasks/${id}`,{
       	taskName:tName,
       	completed:tCompleted
       })
       const {_id:taskId,completed,taskName} = task 
      taskEditId.textContent = taskId
     taskEditName.value = taskName 
     if(completed){
     	taskEditCompleted.checked = true
     }
     formAlert.textContent = "Edited Successfully...."
     window.location.href = "index.html"
     formAlert.style.visibility = 'visible';
     }
     catch(err){
     	console.log(err)
     	formAlert.textContent = "Error Occurs...."
        formAlert.style.visibility = 'visible';
     }
     setTimeout(()=>{
           formAlert.textContent = ""
           formAlert.style.visibility = "hidden"
     },3000)
})