let itemsList = [];
let form = document.querySelector('form');
let submitBtn=document.querySelector(".submitform");
let indexValue =-1;

function ItemsHandler(event){
    event.preventDefault();
    const item = {
        name: document.getElementById("name").value,
        quantity: parseInt(document.getElementById("quantity").value),
        price: parseInt(document.getElementById("price").value),
    }
    if (indexValue == -1){
        if (item.quantity > 0 && item.price > 0)
        {
            itemsList.push(item);
            UpdateDisplay();
            form.reset();
        }
        else{
            alert("Enter the valid Data..");
        }
    }
    else{
        itemsList[indexValue] = item;
        indexValue = -1;
        submitBtn.value = "Submit";
        UpdateDisplay();
        form.reset();
    }
}

function UpdateDisplay(){
    let sum = 0;
    let tbody = document.querySelector('.table-body');
    tbody.innerHTML = '';
    itemsList.forEach((item,index) => {
        if (item){
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.price * item.quantity}
            <td>
                <button class="delBtn" onclick="deleteUser(${index})">Delete</button>
                <button class="editBtn" onclick="editUser(${index})">Edit</button>
            </td>
        `;
        sum+= item.quantity * item.price;   
        tbody.appendChild(row);
        }
    });
    document.getElementById("price-tag").innerHTML = sum;
}
    function deleteUser(index)
    {
        // alert("");
        itemsList.splice(index,1);
        if(submitBtn.value == "Edit"){
            form.reset();
            submitBtn.value = "Submit"
        }
        UpdateDisplay();
    }

    function editUser(index)
    {
        let item=itemsList[index];
        document.getElementById('name').value=item.name;
        document.getElementById('quantity').value=item.quantity;
        document.getElementById('price').value=item.price;
        UpdateDisplay();
        submitBtn.value = "Edit";
        indexValue = index;
    }