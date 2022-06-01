const taskInputName = document.querySelector(".task-input-name");
const inputTaskForm = document.querySelector(".inputTask");

const formAlert = document.querySelector(".form-alert")
const taskDom = document.querySelector(".taskList")


const showAllTasks =  async ()=>{
        try{
          const {data:{tasks}} = await axios.get('/api/v1/tasks')
          if(tasks.length<1){
               taskDom.innerHTML = `<h4 style="color:grey;font-weight:300;font-size:0.9rem;">No Task is Here....</h4>`
               return 
          }
          const allTasks = tasks.map((task)=>{
          	const{completed,_id:taskId,taskName} = task 
          	return `
             
                    <div class="singleTask ${completed && 'task-completed'}">
                        <h5>
                            <span>  
                                <i class="fa-solid fa-check"></i>
                            </span>
                            ${taskName}
                        </h5>
                        <div class="taskLinks">
                            <a href="edit.html?id=${taskId}"><i class="fa-solid fa-pen-to-square"></i></a>
                         <button><i class="fa-solid fa-trash" data-id="${taskId}"></i>
                           </li></button>
                        </div>
                         
                    </div>  
          	`
          }).join('')
          taskDom.innerHTML = allTasks
        }
        catch(err){
          console.log("error")
        }
}
showAllTasks()
taskDom.addEventListener('click',async (e)=>{
	const el = e.target;
	if(el.classList.contains('fa-trash')){
		const id = el.dataset.id;
		try{
         await axios.delete(`/api/v1/tasks/${id}`)
         showAllTasks()
		}
		catch(err){
			console.log("Errorr")
		}
	}
})

inputTaskForm.addEventListener("submit",async (e)=>{
    e.preventDefault()
    const taskName = taskInputName.value
    try{
    	await axios.post('/api/v1/tasks',{taskName})
    	taskInputName.value = ""
    	formAlert.textContent = "Success,Task Added" 
    	formAlert.style.visibility = 'visible'
    	showAllTasks()
    }
    catch(err){
    	formAlert.style.visibility = "visible"
    	formAlert.textContent ="Error Try Again"
    	console.log("error"+err)
    }
    setTimeout(()=>{
      formAlert.style.visibility = "hidden"
    },3000)

})
