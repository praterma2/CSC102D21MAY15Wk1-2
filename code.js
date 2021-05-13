//wk1-2 countdown timer should run 5....1 then blastoff
function startCountdown() {
    var count = 5;
    //the countdowntimer should display 5
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //after 1 sec, will run code in here
        //the countdowntimer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        //decrease the count by 1
        count = count - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function(){
        //the countdowntimer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);

    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);

    setTimeout(function(){
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 5000);
}