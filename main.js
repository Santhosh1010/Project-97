timer_counter = 0;
timer_check = "";
seconds = 0;
start = "no";
Time_Set = 0;
alarm = "";

function StartTimer()
{
    var Time_Set = document.getElementById("time_input").value;
    console.log(Time_Set);
    document.getElementById("time_set").innerHTML = "Timer Is Set To - "+ Time_Set;
    seconds = (Time_Set*3550); 
    start = "start";
}

function draw()
{
    if(Time_Set > 0 || start=="start")
    {
        timer_start()
    }
    else{
    }
}

function preload()
{
    alarm = loadSound("Alarm.mp3");
}

function timer_start()
{
    timer_counter++;
    console.log(timer_counter)
    if(timer_counter > seconds)
      {
        timer_counter = 0;
        timer_check = "completed"
        timer_finish()
        start = "no";
      }
}

function timer_finish()
{
    alarm.play();
    window.alert("Timer is Done!");
}

function StopAlarm()
{
    alarm.stop();
}