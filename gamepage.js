function gamePageOnload() {
    user1 = localStorage.getItem("Player_1_Name");
    user2 = localStorage.getItem("Player_2_Name");
    user1Score = "0";
    user2Score = "0";
    user1ScoreInt = 0;
    user2ScoreInt = 0;
    console.log(user1);
    console.log(user2);
    document.getElementById("user2Name").innerHTML = user2 + ": ";
    document.getElementById("user1Name").innerHTML = user1 + ": ";
    document.getElementById("user1Score").innerHTML = user1Score;
    document.getElementById("user2Score").innerHTML = user2Score;
    document.getElementById("questionTurnUser").innerHTML = user1;
    document.getElementById("answerTurnUser").innerHTML = user2;
}

mathOperation = "";

function add() {
    document.getElementById("additionButton").style.backgroundColor = "limegreen";
    document.getElementById("subtractionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("multiplicationButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("divisionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("errorMessage").innerHTML = "";
    mathOperation = "add";
    console.log("Math Sign has changed to add");
}

function subtract() {
    document.getElementById("additionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("subtractionButton").style.backgroundColor = "limegreen";
    document.getElementById("multiplicationButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("divisionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("errorMessage").innerHTML = "";
    mathOperation = "subtract";
    console.log("Math Sign has changed to subtract");
}

function multiply() {
    document.getElementById("additionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("subtractionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("multiplicationButton").style.backgroundColor = "limegreen";
    document.getElementById("divisionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("errorMessage").innerHTML = "";
    mathOperation = "multiply";
    console.log("Math Sign has changed to multiply");
}

function divide() {
    document.getElementById("additionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("subtractionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("multiplicationButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("divisionButton").style.backgroundColor = "limegreen";
    document.getElementById("errorMessage").innerHTML = "";
    mathOperation = "divide";
    console.log("Math Sign has changed to divide");
}

function send() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    if (mathOperation == "") {
        document.getElementById("errorMessage").innerHTML = "Please Choose a Math Operation";
    }
    if ((firstNumber == "") || (secondNumber == "")) {
        document.getElementById("errorMessage").innerHTML = "Please Fill in Both Numbers";
    }
    if ((mathOperation != "") && (firstNumber != "") && (secondNumber != "")) {
        if (mathOperation == "add") {
            label = "<h4> " + firstNumber + " + " + secondNumber + "</h4>";
            input = "<label> Answer: </label> <br> <input type='text' placeholder='Answer' class='form-control' id='userAnswerInput'>";
            checkButton = "<br> <button onclick='check()' id='checkButton'> Check </button>";
            output = label + input + checkButton;
            document.getElementById("output").innerHTML = output;
        }

        if (mathOperation == "subtract") {
            label = "<h4> " + firstNumber + " - " + secondNumber + "</h4>";
            input = "<label> Answer: </label> <br> <input type='text' placeholder='Answer' class='form-control' id='userAnswerInput'>";
            checkButton = "<br> <button onclick='check()' id='checkButton'> Check </button>";
            output = label + input + checkButton;
            document.getElementById("output").innerHTML = output;
        }

        if (mathOperation == "multiply") {
            label = "<h4> " + firstNumber + " x " + secondNumber + "</h4>";
            input = "<label> Answer: </label> <br> <input type='text' placeholder='Answer' class='form-control' id='userAnswerInput'>";
            checkButton = "<br> <button onclick='check()' id='checkButton'> Check </button>";
            output = label + input + checkButton;
            document.getElementById("output").innerHTML = output;
        }
        if (mathOperation == "divide") {
            label = "<h4> " + firstNumber + " / " + secondNumber + "</h4>";
            input = "<label> Answer: </label> <br> <input type='text' placeholder='Answer' class='form-control' id='userAnswerInput'>";
            checkButton = "<br> <button onclick='check()' id='checkButton'> Check </button>";
            output = label + input + checkButton;
            document.getElementById("output").innerHTML = output;
        }
        document.getElementById("firstAndSecondNumberDiv").style.display = "none";
        document.getElementById("mathOperatorButtons").style.display = "none";
        document.getElementById("sendButton").style.display = "none";

    }
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    firstIntegerNumber = parseInt(firstNumber);
    secondIntegerNumber = parseInt(secondNumber);
    userAnswer = document.getElementById("userAnswerInput").value;
    if (mathOperation == "add") {
        correctAnswer = firstIntegerNumber + secondIntegerNumber;
    }
    if (mathOperation == "subtract") {
        correctAnswer = firstIntegerNumber - secondIntegerNumber;
    }
    if (mathOperation == "multiply") {
        correctAnswer = firstIntegerNumber * secondIntegerNumber;
    }
    if (mathOperation == "divide") {
        correctAnswer = firstIntegerNumber / secondIntegerNumber;
    }
    if (correctAnswer == userAnswer) {
        if (answerTurn == "player1") {
            user1ScoreInt = user1ScoreInt + 1;
            document.getElementById("user1Score").innerHTML = user1ScoreInt;
            questionTurn = "player1";
            answerTurn = "player2";
            document.getElementById("questionTurnUser").innerHTML = user1;
            document.getElementById("answerTurnUser").innerHTML = user2;
        } else {
            user2ScoreInt = user2ScoreInt + 1;
            document.getElementById("user2Score").innerHTML = user2ScoreInt;
            questionTurn = "player2";
            answerTurn = "player1";
            document.getElementById("questionTurnUser").innerHTML = user2;
            document.getElementById("answerTurnUser").innerHTML = user1;
        }
    }
    else {
        if (answerTurn == "player1") {
            user1ScoreInt = user1ScoreInt - 1;
            document.getElementById("user1Score").innerHTML = user1ScoreInt;
            questionTurn = "player1";
            answerTurn = "player2";
            document.getElementById("questionTurnUser").innerHTML = user1;
            document.getElementById("answerTurnUser").innerHTML = user2;
        } else {
            user2ScoreInt = user2ScoreInt - 1;
            document.getElementById("user2Score").innerHTML = user2ScoreInt;
            questionTurn = "player2";
            answerTurn = "player1";
            document.getElementById("questionTurnUser").innerHTML = user2;
            document.getElementById("answerTurnUser").innerHTML = user1;
        }
    }
    document.getElementById("firstAndSecondNumberDiv").style.display = "inline-block";
    document.getElementById("mathOperatorButtons").style.display = "inline-block";
    document.getElementById("sendButton").style.display = "inline-block";
    document.getElementById("output").innerHTML = "";
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("additionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("subtractionButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("multiplicationButton").style.backgroundColor = "rgb(255, 101, 101)";
    document.getElementById("divisionButton").style.backgroundColor = "rgb(255, 101, 101)";
}