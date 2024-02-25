console.log("Welcome to our Travel Agency");

// For Register form
document.addEventListener("DOMContentLoaded", function () {
  const showData = document.getElementById("data");
  new URLSearchParams(window.location.search).forEach((value, name) => {
    showData.append(`${name}: ${value}`);
    showData.append(document.createElement("br"));
  });
});
