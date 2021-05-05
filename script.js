let input = document.getElementById("type");

let ul = document.querySelector(".allTasks");
input.addEventListener("keypress", getInputValue);

function getInputValue(e){
    let task = e.target.value;

    if(e.key == "Enter"){
        let li = document.createElement("li");
        li.innerText = task;
        

        li.addEventListener("dblclick",function(e){
            li.remove();
        })
        ul.appendChild(li);
        input.value="";
    }

    
    
}

// let task = input.value;
// console.log(task);

