//Displays data and time using moment
var currentDay = moment().format("[Today's date is: ]MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDay)

//Container for the schedule
var timeSlotContainer = document.querySelector(".container")

//time array
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

//fills in each timeslot
timeSlots.forEach(schedulePopulate);

function schedulePopulate(item) {
    //creates div for each time slot to nest inside
    var scheduleRow = document.createElement("div");
    scheduleRow.classList.add("row");
    $(".container").append(scheduleRow); 

    //separates each hour and labels them using information from the timeSlots array
    var hourSlot = document.createElement('p');
    hourSlot.classList.add("hour", "col-2");
    hourSlot.innerText = item.hour + item.period;
    scheduleRow.append(hourSlot);

    //Creates a form to add newtasks
    var toDoForm = document.createElement("form");
    var toDoEntry = document.createElement("input");
    toDoEntry.setAttribute("type", "text")
    toDoEntry.setAttribute("id", "task-" + item.hour)
    toDoEntry.setAttribute("name", "task")
    toDoForm.append(toDoEntry);
    scheduleRow.append(toDoForm);

    //classifies time slots into past present and future to color code appropriately
    if (item.time === moment().format("HH")) {
        toDoForm.classList.add("present","col-9");

    } else if (item.time > moment().format("HH")) {
        toDoForm.classList.add("future","col-9");

    } else {
        toDoForm.classList.add("past","col-9");
    }

    //save button
    var saveSection = document.createElement('p'); 
    saveSection.classList.add("saveBtn","col-1");
    scheduleRow.append(saveSection);
    //save icon from font awesome
    var save = document.createElement('i'); 
    save.classList.add("fa", "fa-save");
    saveSection.append(save);
    //event listener so that the new task entry is saved when the user clicks the button
    saveSection.addEventListener('click', function(event){
        var newToDo = $(event.target).closest("p").prev().find("input").val()
        item.task = newToDo; 
        localStorage.setItem(item.time, item.task);
    })

    //adds a task list and checks for local storage
    var taskList = document.createElement("p");
    toDoForm.append(taskList);
    taskList.innerText = localStorage.getItem(item.time) ||'';

}
