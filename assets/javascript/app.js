var number = 90;
var intervalId;
var ans = 0;
var wrongAns = 0;


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function decrement() {
    number--;
    $(".time-left").html("<h2>Time Remaining: " + number + "<h2>");
    if (number === 0) {
        stop();
        //go to results div
    }

}

function handleClick() {
    for(var i = 1; i <= 8; i++) {
        var radios = document.getElementsByName("btn" + i);
        for(var x = 0; x < radios.length; x++) {
            var radio = radios[x];
            if(radio.value == "correct" && radio.checked) {
            ans++;
            } else if(radio.value == "incorrect" && radio.checked) {
                wrongAns++;
            }
        }
    }
}

$(document).ready( function() {
    $(".quizContainer").hide();
    $(".startBtn").click( function() {
        $(".startBtn").hide();
        $(".quizContainer").show();
        run();
    })
});  

$(document).ready( function() {
    $(".doneBtn").click( function() {
        $(".time-left").stop()
        $(".doneBtn").hide();
        $(".quizContainer").hide();
        $(".done").html("<h1>All Done!</h1>");
        $(".answers").append("Correct Answers: ", ans);
        $(".wrongAnswers").append("Incorrect Answers: ", wrongAns);
    });
});

        
       

  



