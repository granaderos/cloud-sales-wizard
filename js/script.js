var current_question = 1;
var total_questions = 9;
$(document).ready(function() {

    $("#btnGetStarted").click(function() {
        window.location.href = "wizard.html";
    })

});

var haveSomethingToPutOnCloud = -1
var hasAnExistingApplication = -1;
var clientHasApplicationKnowledge = -1;
var clientHasCloudKnowledge = -1;
var clientHasITPersonnel = -1;
var personnelHasCloudKnowledge = -1;
var availIBMSupport = -1;
var willingToHireITPersonnel = -1;

var ready = -1;

function next() {
    console.log("current question = " + current_question)

    if(current_question > 0) {
        $("#btnBack").show();
    }
    
    if(current_question == 2) {
        
        haveSomethingToPutOnCloud = $("input[name='haveSomethingToPutOnCloud']:checked").val();
        console.log("haveSomethingToPutOnCloud " + haveSomethingToPutOnCloud);
        if(haveSomethingToPutOnCloud == 0) {
            // alert("You're not ready for cloud.")
            ready = 0;
            displayDialog();
            return;
        }
    } else if(current_question == 3) {
        hasAnExistingApplication = $("input[name='hasAnExistingApplication']:checked").val();
        console.log("hasAnExistingApplication = " + hasAnExistingApplication)

        if(hasAnExistingApplication == 0) {
            // proceed to q6
            current_question+=2;
        }
    } else if(current_question == 4) {
        clientHasApplicationKnowledge = $("input[name='clientHasApplicationKnowledge']:checked").val();
        console.log("clientHasApplicationKnowledge = " + clientHasApplicationKnowledge);
        if(clientHasApplicationKnowledge == 0) {
            ++current_question;
        }
    } else if(current_question == 5) {
        clientHasCloudKnowledge = $("input[name='clientHasCloudKnowledge']:checked").val();
        console.log("clientHasCloudKnowledge = " + clientHasCloudKnowledge)
        if(clientHasCloudKnowledge == 1) {
            // alert("You are ready for cloud.");
            ready = 1;
            displayDialog();
            return;
        }
    } else if(current_question == 6) {
        clientHasITPersonnel = $("input[name='clientHasITPersonnel']:checked").val();
        console.log("clientHasITPersonnel = " + clientHasITPersonnel);
        if(clientHasITPersonnel == 0) {
            ++current_question;
        }
    } else if(current_question == 7) {
        personnelHasCloudKnowledge = $("input[name='personnelHasCloudKnowledge']:checked").val();
        console.log("personnelHasCloudKnowledge = " + personnelHasCloudKnowledge);
        if(personnelHasCloudKnowledge == 0) {
            ++current_question;
        } else {
            ready = 1;
            // alert("You are ready for cloud.")
            displayDialog();
            return;
        }
    } else if(current_question == 8) {
        availIBMSupport = $("input[name='availIBMSupport']:checked").val();
        console.log("availIBMSupport = " + availIBMSupport);
        if(availIBMSupport == 1) {
            ready = 1;
            // alert("You are ready for cloud.");
            displayDialog();
            return;
        }
    } else if(current_question == 9) {
        willingToHireITPersonnel = $("input[name='willingToHireITPersonnel']:checked").val();
        console.log("willingToHireITPersonnel = " + willingToHireITPersonnel);
        if(willingToHireITPersonnel == 0) {
            // alert("You are not yet ready for cloud.");
            ready = 0;
        } else {
            ready = 1;
            // alert("You are ready for cloud.");
            // procees to the next set of questions
        }
        displayDialog();
        return;
    }

    // $(".question-container").hide();
    ++current_question;
    if(current_question > 1){
        $("#question_1").hide();
    }
    $("#question_" + current_question).slideDown("slow");
}

function displayDialog() {
    if(ready == 1) {
        $("#divReady").dialog({
            show: {
                effect: "slide",
                duration: 500
            },
            hide: {
                effect: "explode",
                duration: 500
            },
            modal: true,
            width:400,
            buttons: {
                "Proceed": function() {
                    $(this).dialog("close");
                    displayCloudSpecificQuestions();
                }
            }
        });
    } else {
        $("#divNotReady").dialog({
            show: {
                effect: "slide",
                duration: 500
            },
            hide: {
                effect: "explode",
                duration: 500
            },
            modal: true,
            width:400,
            buttons: {
                "Close": function() {
                    window.location.reload();
                }
            }
        });
    }
}

function displayCloudSpecificQuestions() {
    $(".question-container").hide();
    $(".b_question").show();
    $("#btnBack").hide();
    $("#btnNext").hide();
    $("#btnSubmit").show();
    // $("#question_10").show("slide", { direction: "right" }, 1000);
    $("#question_10").slideDown("slow");
}

function submit() {
    $("#divOutput").show();
    $("#divRedhat").show();
    $("#divGoogleCloud").show();
    $("#questions_div").hide();
    $("#divSummary").show();
}

$(document).ready(function() {
    $('.summary_tooltip').tooltip();
  });
