document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservationForm");
  const tableBody = document.getElementById("reservationBody");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Маягт илгээхийг хориглох

    // Маягтын утгыг авах
    const name = form.elements["name"].value;
    const date = form.elements["date"].value;
    const time = form.elements["time"].value;
    const partySize = form.elements["partySize"].value;
    const phoneNumber = form.elements["phoneNumber"].value;
    const email = form.elements["email"].value;

    // Хүснэгтэнд шинэ мөр үүсгэнэ
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${date}</td>
      <td>${time}</td>
      <td>${partySize}</td>
      <td>${phoneNumber}</td>
      <td>${email}</td>
    `;

    // Хүснэгтэнд шинэ мөр хавсаргана
    tableBody.appendChild(newRow);

    // Илгээсний дараа маягтын талбаруудыг арилгах
    form.reset();
  });
});
