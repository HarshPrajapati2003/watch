
var hr = 0;
var min = 0 ;
var sec = 0;
var count = 0;

var timer = false;


function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
function stopwatch(){
    if(timer==true){
        setTimeout("stopwatch()",10);
        count ++;
                if(count==60){
                    sec++;
                    count=0;
                }
                if(sec==60){
                    min++;
                    sec=0;
                }
                if(min==60){
                    hr++;
                    min=0;
                    sec=0;
                 }
                 var hrString = hr;
                 var minString = min;
                 var secString = sec;
                 var countString = count;
                                if(hr<10){
                                    hrString = "0"+hrString;
                                }
                                if(min<10){
                                    minString = "0"+minString;
                                }
                                if(sec<10){
                                    secString = "0"+secString;
                                }
                                if(count<10){
                                    countString = "0"+countString;
                                }
                               
        document.getElementById("hr").innerHTML=hrString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("count").innerHTML=countString;
      
            // if(sec>0){
            //     document.getElementsByClassName("txt")[2].style.color="rgb(63, 62, 62)";
            // }
            // if(min>0){
            //     document.getElementsByClassName("txt")[1].style.color="rgb(63, 62, 62)";
            // }
            // if(hr>0){
            //     document.getElementsByClassName("txt")[0].style.color="rgb(63, 62, 62)";
            // }
    }
    if(hr==24){
        reset();
    }
}