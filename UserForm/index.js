let hobbies = [];
    let users = [];
    let hobbyInput = document.getElementById('hobbies');
    let hobbiesList = document.getElementById('hobbies-list');
    let addHobbyBtn = document.querySelector('.addhobbybtn');
    let form = document.querySelector('form');
    let submitBtn = document.querySelector('.submitform');
    let indexValue=-1;

    function UpdateDisplay(){
        let tableBody = document.querySelector('.table-body');
        tableBody.innerHTML = '';
        if (users.length!=0){
            users.forEach((user,index) => {
                let row = document.createElement('tr');
                row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>${user.hobbies.join(', ')}</td>
                <td>
                    <button class="delBtn" onclick="deleteUser(${index})">Delete</button>
                    <button class="editBtn" onclick="editUser(${index})">Edit</button>
                </td>
                `;
                tableBody.appendChild(row);
            });
        }
        else{
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>Default Name..</td>
                <td>..</td>
                <td>..@gmail.com</td>
                <td>Hobbies..</td>
                <td>Any Actions..
                </td>
                `;
            tableBody.appendChild(row);
        }
    }
    form.addEventListener("submit", submitForm);

    function submitForm(event) {
        event.preventDefault();
        let user = {
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            email: document.getElementById('email').value,
            hobbies: hobbies
        };
        if (indexValue == -1){
            users.push(user);
        }
        else
        {
            users[indexValue] = user;
            indexValue = -1;
            submitBtn.value = "Submit";
        }
        UpdateDisplay();
        form.reset();
        hobbies = [];
        hobbiesList.innerHTML= ''; 
    }

    addHobbyBtn.addEventListener("click", addHobby);

    function addHobby(event) {
        event.preventDefault();
        let newHobby = hobbyInput.value.trim();
        if (newHobby) {
            hobbies.push(newHobby);
            updateHobbiesDisplay();
            hobbyInput.value = "";
        }
    }

    function updateHobbiesDisplay() {
        hobbiesList.innerHTML = '';
        hobbies.forEach((hobby,index) =>
            hobbiesList.innerHTML += `<text class= "Child" >${hobby}<span><button class= "cross" onclick= crossHobby(${index})>X</button></span>${index < hobbies.length - 1 ? ',' : ''}</text>`)
    }

    function crossHobby(index)
    {
        hobbies.splice(index,1);
        updateHobbiesDisplay();
    }
    function deleteUser(index)
    {
        users.splice(index,1);
        if(submitBtn.value == "Edit"){
            form.reset();
            hobbies= [];
            hobbiesList.innerHTML ="";
            submitBtn.value = "Submit"
        }
        UpdateDisplay();
    }

    function editUser(index)
    {
        let user=users[index];
        document.getElementById('name').value=user.name;
        document.getElementById('age').value=user.age;
        document.getElementById('email').value=user.email;
        hobbies=user.hobbies;
        updateHobbiesDisplay();
        submitBtn.value = "Edit";
        indexValue = index;
    }

    function clearUsers(){
        users = [];
        UpdateDisplay();
    }