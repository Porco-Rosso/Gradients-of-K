//	         ______________________________________
//  ________|					                   |_______
//  \	    |		Gradients of K		           |	  /
//   \	    |		    by Drpoup		           |	 /
//   /	    |______________________________________|	 \
//  /__________)	 stereostance.com	        (_________7
//
// Hello everyone, I'm glad you have downloaded my Lockhtml3 theme! It was a great learning experience coding this, and I hope you will enjoy it as much as I do!
//Because I was so close to making this a paid theme, I ask that if you are able to, please donate some change my way! I have some great lockscreen ideas in mind for the future, and having some recognition for my work would go a long way! 
// donate below:
// Bitcoin: 18EGVPDUkgJ4rusBvb1uRCtQY5tQTuFUh4 
// Dogecoin: DLh7FW2ToPqGhsJkSQVtnJ4uDHFCf4caAx
// Paypal: stereostance@gmail.com

// 24 hour time. true = 24 hours, false = 12 hours. //
var hours24 = false;

// display seconds? //
var displayseconds = false;

// show AM/PM ? //
var showAMPM = true;

// clock color hint: #FFFFFF is white and #000000 is black //
// hint! set to 'transparent' if you don't want to display the clock! (useful if you want to use theme for SBHTML) //
var clockcolor = 'white';

//clock font size ; Default = 44//
var clocksize = 66;

//enable clock and date  shadow //
var enableclockshadow = false;

//Show date?//
var showdate = true;

//Gradient Direction //
//hint! 0 is vertical, 90 is horizontal and 45 is diagonal//
var GradientOrientation = 90;

//rotate gradient based on time? (seconds)//
var Rotateontime = true;

// Allow the clock to move up when notifications are present on the lockscreen. ; Default = 44 //
// hint! to get notification support working install "groovyAPI" in Cydia! //
var notification_support = true;

// Spacing between the widget and the top of your screen when notifications are present on the lockscreen. (pixels) ; Default = 70 //
var notification_spacing = 70;

// Overide Clock Position maually? If set to 'false' the clock is automatically placed in the middle. //
var OverideClockPosition = true;

// Position of clock from the top in pixels if OverideClock Position is set to 'true' ; Default = 85 //
var ManualClockPosition = 70;




//////////////////////////////////////////////////////////////// Advanced Settings below /////

///////////////////////////Hue////
// speed of change (how many minues to cylce through all colors) ; Default = 1 //
// hint! 1 for one minute, 60 for one hour, 86400 for a day!  //
// warning, values at one minute or below may cause increased battery drain! but so far I haven't seen any effect //
var NumberOfMinutesInCycleForHUE = 0.25;

//color range displayed at once 0-360 ; Default = 80//
// hint! 0 is one color, 360 is the entire color spectrum //
var ColorRangeFrom0To360 = 70;

//Gradient percentages - leave this alone if you don't know what it does//
//default = 10/90
var Gradientpercent1 = 10;
var Gradientpercent2 = 90;


//////////////////////////Lightness////
// how many minutes it takes to go from min lightness to the max lightness ; Default = 60 //
var NumberOfMinutesInCycleForLightness = 60;

//Max lightness 0 - 100 ; Default = 70//
var MaxlightnessFrom0To100 = 50;

//Min lightness 0 - 100 ; Default = 30//
var MinlightnessFrom0To100 = 30;

//lightness gradient (max to min) ; Default = 20 //
// the lightness gradient value: 0 means no lightness gradient //
// hint! should be set smaller or equal to the ligtness value If you don't want the bottom to be black //
var LightnessRangeFrom0to100 = 20;


//////////////////////////Saturation////
// how many minutes it takes to go from grey to the max saturation ; Default = 10 //
var NumberOfMinutesInCycleForSaturation = 10;

//Max Saturation 0 - 100 ; Default = 55//
var MaxSaturationFrom0To100 = 55;

//Min Saturation 0 - 100 ; Default = 20//
var MinSaturationFrom0To100 = 30;

//Saturation gradient (max to min) 0 - 100 ; Default = 0//
// the Saturation gradient value: 0 means no Saturation gradient //
// Hint! should be at smaller or equal to the range between max and min of the Saturation value If you don't want the bottom to be grey //
var SaturationRangeFrom0to100 = 0;


//////////////////////////////////////////////////////////////// Overide Settings below //////
//Overide Hue	0-360 //
// set HueOveride to true to overide hue value //
var HueOveride = false;
var HueOverideValue0To360 = 300;

//Overide Saturation   0-360 //
// set HueOveride to true to overide hue value //
var SaturationOveride = false;
var SaturationOverideValue0To100 = 50;

//Overide Lightness   0-360 //
// set HueOveride to true to overide hue value //
var LightnessOveride = false;
var LightnessOverideValue0To100 = 55;
