const formTodo=document.querySelector(".form-todo");
const todoText=document.querySelector(".form-todo input[type='text']");
const ui=document.querySelector(".todo");
formTodo.addEventListener("submit",(event)=>{
         event.preventDefault();
         const text=todoText.value;
         todoText.value="";
         newli=document.createElement("li");
         const innerhtml=`<span class="span">${text}</span>
         <div>
             <button class="btn add">add</button>
             <button class="btn remove">remove</button>
         </div>`
         newli.innerHTML=innerhtml;
         ui.append(newli);
         
})

ui.addEventListener("click",(event)=>{
    if(event.target.classList.contains("remove")){
       const targetedli=event.target.parentNode.parentNode;
       console.log(targetedli);
       targetedli.remove();
       
    }
    else{
        const lispan=event.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="line-through";
    }
    
})