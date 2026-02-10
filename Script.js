const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#studentTable tbody");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input");
    let row = document.createElement("tr");

    inputs.forEach(input => {
        let cell = document.createElement("td");
        cell.textContent = input.value;
        row.appendChild(cell);
        input.value = "";
    });

    tableBody.appendChild(row);
});

function searchStudent() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = tableBody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let text = rows[i].textContent.toLowerCase();
        rows[i].style.display = text.includes(input) ? "" : "none";
    }
}
