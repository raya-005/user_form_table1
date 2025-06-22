const form = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

let students = [];

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();

  const student = { name, email, subject };
  students.push(student);

  renderTable(); // Update table
  form.reset(); // Clear the form
});

function renderTable() {
  tableBody.innerHTML = ""; // Clear old rows

  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border px-4 py-2">${index + 1}</td>
      <td class="border px-4 py-2">${student.name}</td>
      <td class="border px-4 py-2">${student.email}</td>
      <td class="border px-4 py-2">${student.subject}</td>
    `;
    tableBody.appendChild(row);
  });
}
