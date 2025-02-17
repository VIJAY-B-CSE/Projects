
var list_container = document.getElementById("list-container")

function add(){
    var input = document.getElementById("input")
    if(input.value==""){
        alert("Please Enter Something.")
    }
    else{
        var list_item = document.createElement("li")
        list_item.id = "list"
        list_item.innerHTML = input.value + "<button onclick='del(event)'>Delete</button>"
        list_container.append(list_item)
        input.value = ""
    }
    
}

function del(event){
    event.target.parentElement.remove()
}


