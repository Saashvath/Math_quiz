function next_page(){

    var  player_1 = document.getElementById("player_1").value;
    var player_2 = document.getElementById("player_2").value;
    localStorage.setItem("player_value1",player_1);
    localStorage.setItem("player_value2", player_2);
    window.location = "gamepage.html" 

}