document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userData = {
    id: formData.get("id"),
    firstName: formData.get("firstName"),
    middleName: formData.get("middleName"),
    lastName: formData.get("lastName"),
    gender: formData.get("gender"),
    birthday: formData.get("birthday"),
  };
  localStorage.setItem("userData", JSON.stringify(userData));
  window.location.href = "display.html";
});
