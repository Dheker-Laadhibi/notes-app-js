
//container s 
const notesContainer=document.querySelector('.notes-container')
// select btn 
const createBtn=document.querySelector('.btn')
//select all notes created 
let notes = document.querySelectorAll('.input-box')
console.log("btn",createBtn);
//store  inputs in the browser 

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes") || ""; 
}
showNotes();

createBtn.addEventListener("click",()=>{

let inputBox=document.createElement("p");
let img =  document.createElement("img");
inputBox.className="input-box";
inputBox.setAttribute("contenteditable" , "true");
img.src="images/delete.png"
notesContainer.appendChild(inputBox).appendChild(img)

    
updateStorage();

})

//is the event object that gets passed to the event handler function when a click event occurs. 
// refers to the specific element that was clicked, triggering the event. This could be any element inside notesContainer.
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
        
    }
    //update storage when start typing 
    else if (e.target.tagName ==="p"){
        let  notes = document.querySelectorAll('.input-box')
         console.log("nooooooooot",notes);
         notes.forEach(nt => {
            console.log("n",nt);
            
            nt.onkeyup = function(){
                updateStorage();
            }
         })
    }
})

console.log( document.querySelectorAll('.input-box'));
