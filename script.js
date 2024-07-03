document.addEventListener('DOMContentLoaded', () => {
    const newUserBtn = document.getElementById('newUserBtn');
    const saveUserBtn = document.getElementById('saveUserBtn');
    const userForm = document.getElementById('userForm');
    const userTableBody = document.getElementById('userTableBody');
    const hideDisabled = document.getElementById('hideDisabled');
    const userFormContainer = document.querySelector('.user-form');

    // Show the new user form when "+ New User" button is clicked
    newUserBtn.addEventListener('click', () => {
        userFormContainer.style.display = 'flex';
    });

    // Add new user to the table on "Save User" button click
    saveUserBtn.addEventListener('click', function () {
        // Form input values
        const username = document.getElementById('username').value;
        const displayName = document.getElementById('displayName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const userRoles = document.getElementById('userRoles').value;
        const enabled = document.getElementById('enabled').checked;

        // Generate a new ID for the user
        const newId = userTableBody.children.length + 1;

        // Create a new row and add it to the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${newId}</td>
            <td>${username}</td>
            <td>${email}</td>
            <td>${enabled}</td>
        `;
        newRow.dataset.enabled = enabled;
        userTableBody.appendChild(newRow);

        // Reset the form
        userForm.reset();

        // Hide the form
        userFormContainer.style.display = 'none';
    });

    // Hide/Show disabled users
    hideDisabled.addEventListener('change', () => {
        const rows = userTableBody.querySelectorAll('tr');
        rows.forEach(row => {
            if (hideDisabled.checked && row.dataset.enabled === 'false') {
                row.style.display = 'none';
            } else {
                row.style.display = '';
            }
        });
    });
});
