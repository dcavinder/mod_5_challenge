var currentDay = moment().format("[Today's date is: ]MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDay)
var timeSlotContainer = document.querySelector(".container")
var timeSlots = [
    {
        hour: '7',
        time: '07',
        period: 'am',
        task: ''
    },
    {
        hour: '8',
        time: '08',
        period: 'am',
        task: ''
    },
    {
        hour: '9',
        time: '09',
        period: 'am',
        task: ''
    },
    {
        hour: '10',
        time: '10',
        period: 'am',
        task: ''
    },
    {
        hour: '11',
        time: '11',
        period: 'am',
        task: ''
    },
    {
        hour: '12',
        time: '12',
        period: 'pm',
        task: ''
    },
    {
        hour: '1',
        time: '13',
        period: 'pm',
        task: ''
    },
    {
        hour: '2',
        time: '14',
        period: 'pm',
        task: ''
    },
    {
        hour: '3',
        time: '15',
        period: 'pm',
        task: ''
    },
    {
        hour: '4',
        time: '16',
        period: 'pm',
        task: ''
    },
    {
        hour: '5',
        time: '17',
        period: 'pm',
        task: ''
    },
    {
        hour: '6',
        time: '18',
        period: 'pm',
        task: ''
    },
    {
        hour: '7',
        time: '19',
        period: 'pm',
        task: ''
    },
    {
        hour: '8',
        time: '20',
        period: 'pm',
        task: ''
    }
]

timeSlots.forEach(schedulePopulate);

function schedulePopulate(item) {
    var scheduleRow = document.createElement("div");
    scheduleRow.classList.add("row");
    $(".container").append(scheduleRow); 

    var hourSlot = document.createElement('p');
    hourSlot.classList.add("hour", "col-2");
    hourSlot.innerText = item.hour + item.period;
    scheduleRow.append(hourSlot);


    var toDoForm = document.createElement("form");
    var toDoEntry = document.createElement("input");
    toDoEntry.setAttribute("type", "text")
    toDoEntry.setAttribute("id", "task-" + item.hour)
    toDoEntry.setAttribute("name", "task")
    toDoForm.append(toDoEntry);
    scheduleRow.append(toDoForm);

    if (item.time === moment().format("HH")) {
        toDoForm.classList.add("present","col-9");

    } else if (item.time > moment().format("HH")) {
        toDoForm.classList.add("future","col-9");

    } else {
        toDoForm.classList.add("past","col-9");
    }

    var saveSection = document.createElement('p'); 
    saveSection.classList.add("saveBtn","col-1");
    scheduleRow.append(saveSection);

    var save = document.createElement('i'); 
    save.classList.add("fa", "fa-save");
    saveSection.append(save);

    saveSection.addEventListener('click', function(event){
        var newToDo = $(event.target).closest("p").prev().find("input").val()
        item.task = newToDo; 
        localStorage.setItem(item.time, item.task);
    })
    var taskList = document.createElement("p");
    toDoForm.append(taskList);
    taskList.innerText = localStorage.getItem(item.time) ||'';

}
