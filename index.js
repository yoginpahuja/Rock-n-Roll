
function diceroll()
{
    var i1=document.querySelector(".img1");
    var i2=document.querySelector(".img2");
    var text=document.querySelector("h1");
    var num1=Math.floor(Math.random()*6)+1;
    var num2=Math.floor(Math.random()*6)+1;
if(num1>num2)
{
  text.textContent="Player 1 wins!";
}
else if(num1<num2)
{
    text.textContent="Player 2 wins!";
}
else
{
    text.textContent="Draw!,Roll more"
}
// alert(num1);
var img1src="dice"+num1+".png";
// alert(img1src);

i1.setAttribute("src","images/"+img1src);

// alert(num1);
var img2src="dice"+num2+".png";
// alert(img1src);

i2.setAttribute("src","images/"+img2src);
}


