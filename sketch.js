let time;

days={
  0:'Saturday',
  1:'Sunday',
  2:'Monday',
  3:'Tuesday',
  4:'Wednesday',
  5:'Thursday',
  6:'Friday'
};

function setup() {
  let cnv=createCanvas(800, 400);
  cnv.position(50,100);
  time=document.getElementById("time");
}

function draw() {
  background(240);
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
  let d = ((h+5)%7) + 1 
  return days[int(d)];
}