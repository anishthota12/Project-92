function addUser() {
    userName1 = document.getElementById("input1").value;
    userName2 = document.getElementById("input2").value;
    localStorage.setItem("Player_1_Name", userName1);
    localStorage.setItem("Player_2_Name", userName2);
    window.location = "gamepage.html";
}