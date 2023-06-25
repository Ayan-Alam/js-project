document.addEventListener('DOMContentLoaded',function(){
    let form = document.getElementById("addform");
    let itemList = document.getElementById('list-items');
    document.addEventListener('submit', addItem);
    function addItem(e){
        let ExpenseAmount = document.getElementById('chooseExpenseAmount').value;
        let Description = document.getElementById('chooseDescription').value;
        let Category = document.getElementById('category').value;
        e.preventDefault();
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(ExpenseAmount + " - " +Description+  " - " + Category+"     "));
        var delet = document.createElement('button');
        delet.classList.add("btn", "btn-danger", "btn-sm", "mr-2");
        delet.type = 'submit';
        delet.appendChild(document.createTextNode('Delete'));
        li.appendChild(delet);
        itemList.appendChild(li);
        var edit = document.createElement('button');
        edit.classList.add("btn", "btn-primary", "btn-sm");
        edit.type = 'submit';
        edit.appendChild(document.createTextNode('edit'));
        li.appendChild(edit);
        itemList.appendChild(li);
        const my_obj = {
        ExpenseAmount : ExpenseAmount,
        Description : Description,
        Category : Category,
       };
       delet.onclick = () =>{
         localStorage.removeItem(my_obj.Description);
         itemList.removeChild(li);
        }
        edit.onclick = () =>{
           localStorage.removeItem(my_obj.Description);
           itemList.removeChild(li);
           document.getElementById('chooseExpenseAmount').value = my_obj.ExpenseAmount;
           document.getElementById('chooseDescription').value = my_obj.Description;
           document.getElementById('category').value = my_obj.Category;
         }    
        let my_obj_string = JSON.stringify(my_obj);
        localStorage.setItem(Description,my_obj_string);
     }
});