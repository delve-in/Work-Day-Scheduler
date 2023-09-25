// Declaring and defining variables

var timeBlock;
var description;
var text;
var parent;
var button = $('.btn');
var dayNum = dayjs().format('D');
var currentHour = 12
// dayjs().hour();
// funtion to render the events to the time block

function renderEvent (){
  for (var i=9;i<18;i++)
  {
    timeBlock = "hour-" + i;
    description = localStorage.getItem("hour-"+i)||"";
    parent = $("#"+timeBlock);
    text = parent.children().eq(1);
    text.append(description);
  }
}

// function to render the date on top of the page

function renderDate(){
  if (dayNum % 10 == 1 && dayNum != 11)
  {
    $('#currentDay').text(dayjs().format('dddd,MMMM D[st]'));
  }
  else if(dayNum % 10 == 2 && dayNum != 12)
  {
    $('#currentDay').text(dayjs().format('dddd,MMMM D[nd]'));
  }else if(dayNum % 10 == 3 && dayNum != 13)
  {
    $('#currentDay').text(dayjs().format('dddd,MMMM D[rd]'));
  }else{
    $('#currentDay').text(dayjs().format('dddd,MMMM D[th]'));
  }

}

//funtion to render the colors to the time block according to the current hour

function renderColor(){

  for(var i=9 ; i<18 ; i++)
  {
    if (i<currentHour)
    {
      console.log(i + "past");

      $('#hour-'+i).addClass("past")
    }
    else if (i==currentHour)
    {
      console.log(i + "present");
      $('#hour-'+i).addClass("present")
    }
    else if(i>currentHour)
    {
      console.log(i + "future");
      $('#hour-'+i).addClass("future")
    }
  }
}

//main function

$(function () {
  
  // function calls

  renderEvent();
  renderDate();
  renderColor();
  
  //button click funtion

  button.on('click', function(e){
    var element = e.target;
    if (element.matches("button")=== true){
      parent = e.target.parentElement.id;
      text = $("#" + parent);
      var div = text.children().eq(1);
      description = div.val();
      localStorage.setItem(parent, description)
      location.reload();
    }else{
      var subParent = e.target.parentElement;
      parent = subParent.parentElement.id;
      var text = $("#" + parent);
      var div = text.children().eq(1);
      description = div.val();
      localStorage.setItem(parent, description);
      location.reload();
    }
  });
});
