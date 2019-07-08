var current_question = 1;
var total_questions = 6;
$(document).ready(function() {
    $("#performaceSlider").slider();
});

function next() {
    if(current_question == total_questions - 1) {
        $("#btnNext").hide();
        $("#btnSubmit").show();
    } 

    $("#question_" + current_question).hide();
    ++current_question;
    $("#question_" + current_question).show("slide", { direction: "right" }, 1000);
}

function submit() {
    $("#divOutput").show();
    $("#divRedhat").show();
    $("#divGoogleCloud").show();
    $("#questions_div").hide();
    $("#divSummary").show();
}