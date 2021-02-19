let time;

days={
  6:'Saturday',
  0:'Sunday',
  1:'Monday',
  2:'Tuesday',
  3:'Wednesday',
  4:'Thursday',
  5:'Friday'
};

function setup() {
  let cnv=createCanvas(900, 500);
  cnv.position(50,100);
  time=document.getElementById("time");
}

function draw() {
  background(250);

  strokeWeight(5);
  line(0,0,0,height);
  line(0,0,width,0);
  line(0,height,width,height);
  line(width,height,width,0);
  drawTime();
}

function drawTime(){

  let s=second();
  let m=minute();
  let h=hour();

  if(s<10){s="0"+s;}
  if(m<10){m="0"+m;}
  if(h<10){h="0"+h;}
  time.innerHTML="Time: "+h+":"+m+":"+s+" <b/>Day:<i> "+getDay(day(),month(),year());
}

function getDay(day,month,year){
  if (month == 1) {
    month = 13;
    year--;
  }
  if (month == 2) {
      month = 14;
      year--;
  }
  let q = day;
  let m = month;
  let k = year % 100;
  let j = year / 100;

  let h = q + 13 * (m + 1) / 5 + k + k / 4 + j / 4 + 5 * j;
  h=h%7;
  let d = ((h+5)%7);
  console.log(d);
  return days[int(d)];
}

var colors = [];
while (colors.length < 1000) {
    do {
        var color = Math.floor((Math.random()*10000000)+1);
    } while (colors.indexOf(color) >= 0);
    colors.push("#" + ("000000" + color.toString(16)).slice(-6));
}
console.log(colors);

let pos=0;
function mouseWheel(event){
  if(lightness(colors[pos])>10){
    select("#time").style('color:white');
  }
  pos=(pos+1)%5;
  select('body').style('background-color:'+color(colors[pos]));
}