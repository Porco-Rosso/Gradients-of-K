$(document).ready(function () {
    run();
});

function run() {

    //time data generator // 
    var date = new Date();
    var hours = date.getHours();
    var properTime = null;

    // 12 or 24 hours config // 
    if (hours>=12) {AMPM = 'PM';}
    else {AMPM = 'AM';}
    
    if (!(hours24)) {
        hours = hours > 12 ? hours - 12 : hours;
    }
    
    var theHours = (hours > 9 ? hours : "0" + hours);
    var theMins = (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
    var theSec = (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());

    var hoursSplit = "" + theHours / 10;
    hoursSplit = hoursSplit <= 9 ? hoursSplit + ".0" : hoursSplit;
    hoursSplit = hoursSplit.split(".");
    var hourOne = hoursSplit[0];
    var hourTwo = hoursSplit[1];

    var minsSplit = "" + theMins / 10;
    minsSplit = minsSplit <= 9 ? minsSplit + ".0" : minsSplit;
    minsSplit = minsSplit.split(".");
    var minOne = minsSplit[0];
    var minTwo = minsSplit[1];

    var bigTime = hourOne + hourTwo + ":" + minOne + minTwo + ":" + theSec;
    if (!(displayseconds)) {
        bigTime = hourOne + hourTwo + ":" + minOne + minTwo;
    }

        //notification mover//
    if (i % 2 === 0) {
        clockposition = ((i - 1) / 2) * (100 / i);
    } else {
        clockposition = 50;
    }

    $(".big-time").css('bottom', clockposition + "%");

    if (window.groovyAPI && notification_support) {
        if (groovyAPI.isShowingNotifications()) {
            $("div.big-time").animate({
                "top": notification_spacing + "px"
            }, 1000);

        } else if ($(".big-time").css("bottom") != clockposition + "%") {
            $("div.content").animate({
                "bottom": clockposition + "%"
            }, 1000);
        }
    }

    if (OverideClockPosition == true) {
        var clockposition = ManualClockPosition;
        $(".big-time").css('top', clockposition + "px");
    } else {
        var clockposition = clockposition;
        $(".big-time").css('bottom', clockposition + "%");
    }
    

    // supertime(tm) value calculator //
    var supertime = (Number(theHours) * 3600) + (Number(theMins) * 60) + Number(theSec);


 
    //start of color-time-generator//

    // Two different run-times if time is more or less then one minute //
    var speed = NumberOfMinutesInCycleForHUE;
    if (speed > 1) {
        // more then one minute //     
        //convert supertime and input value into a hue //
        var y = speed * 60;
        var z = 86400 / y;

        var t = supertime / y;
        var v = Math.floor(t);
        var w = t - v;

        var u = supertime - (v * y);
        var huefraction = u / y;


        var huecalc = 360 * huefraction;
    } else {
        // less then one minute //   
        // convert miliseconds to hue at ratio //
        var today = new Date();
        var milisecs = today.getMilliseconds();
        var supertimemili = (theSec * 1000) + milisecs;

        var y = speed * 60000;
        var z = 60000 / y;

        var t = supertimemili / y;
        var v = Math.floor(t);
        var w = t - v;

        var u = supertimemili - (v * y);
        var huefraction = u / y;


        var huecalc = 360 * huefraction;

    }

    // Two different run-times if time is more or less then one minute //
    var speed2 = NumberOfMinutesInCycleForLightness;
    if (speed2 > 1) {
        // more then one minute //     
        //convert supertime and input value into a hue //
        var y2 = speed2 * 60;
        var z2 = 86400 / y2;

        var t2 = supertime / y2;
        var v2 = Math.floor(t2);
        var w2 = t2 - v2;

        var u2 = supertime - (v2 * y2);
        var lightnessfraction2 = u2 / y2;


        var lightnesscalc = MinlightnessFrom0To100 + ((MaxlightnessFrom0To100 - MinlightnessFrom0To100) * lightnessfraction2);
    } else {
        // less then one minute //   
        // convert miliseconds to hue at ratio //
        var today = new Date();
        var milisecs = today.getMilliseconds();
        var supertimemili = (theSec * 1000) + milisecs;

        var y2 = speed2 * 60000;
        var z2 = 60000 / y2;

        var t2 = supertimemili / y2;
        var v2 = Math.floor(t2);
        var w2 = t2 - v2;

        var u2 = supertimemili - (v2 * y2);
        var lightnessfraction2 = u2 / y2;


        var lightnesscalc = MinlightnessFrom0To100 + ((MaxlightnessFrom0To100 - MinlightnessFrom0To100) * lightnessfraction2);

    }

    // Two different run-times if time is more or less then one minute //
    var speed3 = NumberOfMinutesInCycleForSaturation;
    if (speed3 > 1) {
        // more then one minute //     
        //convert supertime and input value into a hue //
        var y3 = speed3 * 60;
        var z3 = 86400 / y3;

        var t3 = supertime / y3;
        var v3 = Math.floor(t3);
        var w3 = t3 - v3;

        var u3 = supertime - (v3 * y3);
        var Saturationfraction3 = u3 / y3;


        var Saturationcalc = MinSaturationFrom0To100 + ((MaxSaturationFrom0To100 - MinSaturationFrom0To100) * Saturationfraction3);
    } else {
        // less then one minute //   
        // convert miliseconds to hue at ratio //
        var today = new Date();
        var milisecs = today.getMilliseconds();
        var supertimemili = (theSec * 1000) + milisecs;

        var y3 = speed3 * 60000;
        var z3 = 60000 / y3;

        var t3 = supertimemili / y3;
        var v3 = Math.floor(t3);
        var w3 = t3 - v3;

        var u3 = supertimemili - (v3 * y3);
        var Saturationfraction3 = u3 / y3;


        var Saturationcalc = MinSaturationFrom0To100 + ((MaxSaturationFrom0To100 - MinSaturationFrom0To100) * Saturationfraction3);

    }

    //end of color-time-generator//    


    //hsl color calculations//
    var h = huecalc;
    var s = Saturationcalc;
    var l = lightnesscalc;


    // Overides //	
    if (HueOveride == true) {
        var h = HueOverideValue0To360;
    } else {
        var h = h;
    }

    if (SaturationOveride == true) {
        var s = SaturationOverideValue0To100;
    } else {
        var s = s;
    }

    if (LightnessOveride == true) {
        l = LightnessOverideValue0To100;
    } else {
         l = l;
    }
    
    var i = 1;
    
    var h1 = h - ColorRangeFrom0To360;
    if (h1 < 0) {h1+360;}
    else {h1=h1;}
       
 var color1 = 'hsl(' + h + ',' + s + '%,' + l + '%)'   ;
 var color2 = 'hsl(' + h1 + ',' + s + '%,' + l + '%)' ;
 
    //inserting into html/css //    
    
        if (Rotateontime == true){
        GradientOrientation = (Number(theSec) * 6);
        }
    else {GradientOrientation = GradientOrientation; }
    
    
    $("body").css('background', 'linear-gradient(' + GradientOrientation + 'deg,' + color1 + Gradientpercent1 + '%, ' + color2 + Gradientpercent2 + '%)');

       
if (showAMPM == true) {
 bigTime = bigTime + ' ' + AMPM;
}
else {bigTime = bigTime;}

    if (enableclockshadow == true){    
    $(".content").css('text-shadow', '1px 2px 2px black');
}
    else {
    $(".content").css('text-shadow', '0px 0px 0px black');
    }
    
    //inserting clock // 
    $(".big-time").html(bigTime);
    $(".big-time").css('color', clockcolor);
    $(".big-time").css('font-size', clocksize + "px");
    $(".big-time").css('line-height', clocksize + "px");
     //inserting date // 
    
    var fancydate = moment().format('dddd MMMM Do YYYY');
    $(".date").html(fancydate);
    $(".date").css('color', clockcolor);
    $(".date").css('top', clockposition + clocksize + "px");
    
    if (showdate == false) {
    $(".date").css('color', 'transparent');
    }
    

    if (speed < 1.001 || speed2 < 1.001 || speed3 < 1.001) {
        setTimeout("run();", 100);
    } else {
        setTimeout("run();", 1000);
    }
}