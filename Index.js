document.getElementById("expenseTracker").addEventListener("submit", function dosubmit(e) {
    e.preventDefault();
    const money = document.getElementById("expenseAmount").value;
    const decreptn = document.getElementById("description").value;
    const categry = document.getElementById("category").value;

    // Storing value to local storage
    var expenseData = {
        money: money,
        description: decreptn,
        category: categry
    };
    var userDataString = JSON.stringify(expenseData);
    key = generateKey();
    localStorage.setItem(key, userDataString);

    displayExpenseItems();
});

function generateKey() {
    return "key_" + Math.random().toString(36).slice(2, 11);
}

function editExpenseItem(key) {
    const expenseData = JSON.parse(localStorage.getItem(key));

    // Populate the form fields with the expense details for editing
    document.getElementById("expenseAmount").value = expenseData.money;
    document.getElementById("description").value = expenseData.description;
    document.getElementById("category").value = expenseData.category;
}

function removeExpenseItem(key) {
    // Remove the expense item from local storage
    localStorage.removeItem(key);

    // Refresh the displayed expense items
    displayExpenseItems();
}

function displayExpenseItems() {
    const expenseList = document.getElementById("users");
    expenseList.innerHTML = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const expenseData = JSON.parse(localStorage.getItem(key));

        // Create the list item and buttons
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${expenseData.description} - ${expenseData.money} (${expenseData.category})`;

        var editButton = document.createElement('button');
        editButton.className = 'btn btn-sm btn-primary mx-2';
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            editExpenseItem(key);
        });
        li.appendChild(editButton);

        var removeButton = document.createElement('button');
        removeButton.className = 'btn btn-sm btn-danger';
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            removeExpenseItem(key);
        });
        li.appendChild(removeButton);

        // Append the list item to the list
        expenseList.appendChild(li);
    }
}

// Call the displayExpenseItems function to initially display any existing expense items on page load
displayExpenseItems();
