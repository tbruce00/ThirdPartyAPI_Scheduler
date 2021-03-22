// Current Day and Time Function
var timeDisplayEl = $('#currentDay');
var taskTime = $('.task');

function displayTime() {
    var rightNow = moment().format('LLLL');
    timeDisplayEl.text(rightNow);
  }

  setInterval(displayTime, 1000);


// Creates tasks to be stored  
var taskHour = {
    "9am": [],
    "10am": [],
    "11am": [],
    "12am": [],
    "1pm": [],
    "2pm": [],
    "3pm": [],
    "4pm": [],
    "5pm": [],
}


var saveTask = function(){
    localStorage.setItem("taskHour", JSON.stringify(taskHour));
}

var loadTask = function() {
    var loadedTask = JSON.parse(localStorage.getItem("taskHour"));
    if (loadedTask) {
        taskHour = loadedTask
    $.each(taskHour, function(hour, task) {
        var hourEl = $("#" + hour);
        createTask (task, hourEl);
    })    
    }
    auditTask()
}

var timeLock = function() {
    var currentHour = moment().hour();
    taskTime.each(function() {
        var taskTime  = parseInt($(this).attr("id"));

        if (taskTime < currentHour) {
            $(this).removeClass(["present", "future"]);
            $(this).addClass("past");
        }
        else  if taskTime === currentHour) {
            $(this).removeClass(["past", "future"]);
            $(this).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]);
            $(this).addClass(["future"]);
        }

    })
};

