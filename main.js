const form = document.querySelector("form");
const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");
const tableBody = document.querySelector("tbody");
let names = [];
let phones = [];
let rowCount = 1;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    addContact();
    renderTable();

    function addContact() {
        names.push(nameInput.value);
        phones.push(phoneInput.value);
    }

    function renderTable() {
        let tableRowContent = "";
        const darkRow = "<tr class='dark-row'>"
        const lightRow = "<tr class='light-row'>"

        tableRowContent += rowCount % 2 == 0 ? darkRow : lightRow;
        tableRowContent += `<td>${nameInput.value}</td>`
        tableRowContent += `<td>${phoneInput.value}</td>`
        tableRowContent += "</tr>";

        tableBody.innerHTML += tableRowContent;
        rowCount++;
    }
});
