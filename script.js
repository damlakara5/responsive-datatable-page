$(document).ready(function () {
  $("#example").DataTable();
});

$(document).ready(function () {
  $("#dataTable").DataTable(); // ID From dataTable
  $("#dataTableHover").DataTable(); // ID From dataTable with Hover
});

$("#dataTableHover").dataTable({
  language: {
    search: "",
  },
});

const button = document.querySelector(".question");
const answwer = document.querySelectorAll(".answer");
const answerList = document.querySelectorAll(".answer_list");

button.addEventListener("click", function (event) {
  const x = event.target;

  /*     for (let i = 0; i < answwerList.length; i++) {
      answwerList[i] !== answer
        ? answwerList[i].classList.add("hidden")
        : console.log();
    } */

  answerList.forEach((li) => {
    li.classList.contains("hidden")
      ? li.classList.remove("hidden")
      : li.classList.add("hidden");
  });

  x.classList.contains("bold")
    ? x.classList.remove("bold")
    : x.classList.add("bold");
});

const icon = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".section-data");
const iconClose = document.querySelector(".fa-times");
icon.addEventListener("click", function () {
  container.classList.contains("blur")
    ? container.classList.remove("blur")
    : container.classList.add("blur");

  sidebar.classList.toggle("active");
});

iconClose.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  container.classList.remove("blur");
  icon.classList.add("d-sm-block");
});

container.addEventListener("click", function () {
  sidebar.classList.remove("active");
  container.classList.remove("blur");
});
