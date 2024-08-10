document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

    // Collecting form data
    const name = form.name.value;
    const fathersName = form['fathers-name'].value;
    const dob = form.dob.value;
    const religion = form.religion.value;
    const caste = form.caste.value;
    
    // Handle the radio buttons for gender
    const gender = form.gender.value;
    
    const country = form.country.value;
    const state = form.state.value;
    const district = form.district.value;
    const pin = form.pin.value;
    const address = form.address.value;
    
    const education = Array.from(form.querySelectorAll('input[name="education"]:checked'))
        .map(checkbox => checkbox.labels[0].innerText)
        .join(', ');

    const hobby1 = form.hobby1.value;
    const hobby2 = form.hobby2.value;

    const hobbies = [hobby1, hobby2].filter(hobby => hobby).join(', ');

    const photo = URL.createObjectURL(form.photo.files[0]);
    const signature = URL.createObjectURL(form.signature.files[0]);

    // Creating a new row in the table
    const table = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${fathersName}</td>
        <td>${dob}</td>
        <td>${religion}</td>
        <td>${caste}</td>
        <td>${gender}</td>
        <td>${country}</td>
        <td>${state}</td>
        <td>${district}</td>
        <td>${pin}</td>
        <td>${address}</td>
        <td>${education}</td>
        <td>${hobbies}</td>
        <td><img src="${photo}" alt="Photo" style="width: 50px; height: 50px;"></td>
        <td><img src="${signature}" alt="Signature" style="width: 100px; height: 50px;"></td>
    `;
});