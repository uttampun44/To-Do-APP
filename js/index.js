const list = (e)=>{
    // input value
    let input = document.getElementById('to-do-list').value;
    let todolist = document.createElement('li');
      
    if(input == false){

        document.getElementById('write').innerHTML = "You must write something";
        document.getElementById('write').style.color = "white";
    }else{
        
        document.getElementById('list').style.display = "block";
        
       let text = document.createTextNode(input);
       todolist.appendChild(text);
     
      let list = document.getElementById('list').appendChild(todolist);
      list.style.color = 'black';
      list.style.fontSize = '2rem';
      list.style.paddingBottom = "1rem";
     
    //  ********Delete Button*******
     let deletebtn =  document.createElement('button');
     deletebtn.appendChild(document.createTextNode('Delete'));
     
     deletebtn.style.backgroundColor = "Green";
     deletebtn.style.padding = ".6rem";
     deletebtn.style.fontSize = "1rem";
     deletebtn.style.color = "white";
     deletebtn.style.fontWeight = "500";
     deletebtn.style.width = "130px";
     deletebtn.style.marginLeft = "2rem"; 

     todolist.appendChild(deletebtn);
       

    //  *********delete button function ********
     deletebtn.addEventListener('click', (e)=>{
       todolist.remove();
       todolist.style.display = "none";
        console.log("Hello World");
     })

    //  *********edit button*******
    let editbtn = document.createElement('button');
    editbtn.appendChild(document.createTextNode('Edit'));
      
    editbtn.style.backgroundColor = "Red";
    editbtn.style.padding = ".6rem";
    editbtn.style.fontSize = "1rem";
    editbtn.style.color = "white";
    editbtn.style.fontWeight = "500";
    editbtn.style.width = "130px";
    editbtn.style.marginLeft = "2rem"; 

    todolist.appendChild(editbtn);
    
    // *********edit button function ********
    editbtn.addEventListener('click', () =>{
        input.contentEditable = true; 
        // todolist.innerText = input.value;

        console.log(`${input}`);
    })

     console.log(list);

    }

}

// ************add task button *********
const todo = () =>{
   list();
 
}

