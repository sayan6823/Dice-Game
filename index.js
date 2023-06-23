//  Left Image
var randomNumber1= Math.floor(Math.random() * 6) +1;
var locLeft='/Images/dice'+randomNumber1+'.png';
var leftImg=document.querySelector('.img1');
leftImg.setAttribute('src',locLeft);

// Right Image
var randomNumber2= Math.floor(Math.random() * 6) +1;
var locRight='/Images/dice'+randomNumber2+'.png';
var rightImg=document.querySelector('.img2');
rightImg.setAttribute('src',locRight);


// Setting Heading
var heading=document.querySelector('h1');
var message;
if(randomNumber1>randomNumber2)
    message='Player1 won !!';
else if (randomNumber1 < randomNumber2)
    message='Player2 won !!';
else
    message='Its a draw !!';

heading.innerHTML=message;
