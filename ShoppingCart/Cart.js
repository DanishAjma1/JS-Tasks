let itemsList = [];
let form = document.querySelector('form');

function ItemsHandler(event){
    event.preventDefault();
    const item = {
        name: document.getElementById("name").value,
        quantity: document.getElementById("quantity").value,
        price: document.getElementById("price").value,
    }
    if (item.quantity > 0)
    {
        itemsList.push(item);
        UpdateDisplay();
        form.reset();
    }
    else{
        alert("Enter the valid Data..");
    }
    
}

function UpdateDisplay(){
    let sum = 0;
    let tbody = document.querySelector('.table-body');
    tbody.innerHTML = '';
    // alert("show");
    itemsList.forEach(item => {
        if (item){
        let row = document.createElement('tr'); // Create a new row for each item
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
        `;
        sum+= item.quantity * item.price;   
        tbody.appendChild(row); // Append the row to the tbody
        }
    });
    document.getElementById("price-tag").innerHTML = sum;
}