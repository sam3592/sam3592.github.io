var image = document.getElementById("redstop");
var redcar = document.getElementById("redcar");
var bluecar = document.getElementById("bluecar");
var win = document.getElementById("win");
win.style.display = 'none';
var redPlaceholder = 1;
var bluePlaceHolder = 1;
var raceStarted = false;

function changeLightColor()
{
    image.src = "greenlight.jpg";
    image.style.width = '200px';
    image.style.width = '300px';
}
function startRace()
{
    raceStarted = true;

    setTimeout(function () {
        var redSpeed = (Math.random() * 230) + redPlaceholder;
        var blueSpeed = (Math.random() * 210) + bluePlaceHolder;
        redCar.style.marginLeft = redSpeed + 'px';
        blueCar.style.marginLeft = blueSpeed + 'px';
        redPlaceholder = redSpeed;
        bluePlaceHolder = blueSpeed;
        var width = screen.width;

        if ( blueSpeed>= width - 100)
        {
            document.getElementById("winner").src = "bluecar.png";
            win.style.display = 'inline';
	window.alert("The blue car won! Refresh page");
            

        }
        else if (redSpeed >= width - 100)
        {
            document.getElementById("winner").src = "redcar.jpg";
            win.style.display = 'inline';
	window.alert("The blue car won! Refresh page");
        }
        else
        {
            startRace();
        }
    }, 500);
}

function resetTheRace()
{
    image.src = "redstop.png";
    image.style.width = '350px';
    image.style.width = '200px';
    win.style.display = 'none';
    bluecar.style.marginLeft = 0;
    redcar.style.marginLeft = 0;
    bluePlaceHolder= 0;
    redPlaceholder=0;

}