function reBut() {
    document.getElementById("bttn1").className = "btn btn-default";
    document.getElementById("bttn2").className = "btn btn-primary";
    document.getElementById("bttn3").className = "btn btn-warning";
    document.getElementById("bttn4").className = "btn btn-success";
    document.getElementById("bttn5").className = "btn btn-info";
}
            
function regular(backImg,pfontFamily,pfontColor,btnName,btnSett,subHeadColor,mainHead,backColor,bodyBackImg,headingFont,tagClassName,alerClassName,btnClassName) {
    document.getElementById(btnName).className = btnSett;
    document.body.style.backgroundColor = backColor;
    var ele3 = document.getElementsByClassName('para');
    textFont(ele3,pfontColor,pfontFamily);
    document.getElementById('bgc').style.background = backImg;
    var ele = document.getElementsByClassName("centerid");
    subHead(ele, subHeadColor);
    document.getElementById("mhead").style.color = mainHead;
    document.getElementById("mhead").style.fontFamily = headingFont;
    document.getElementById("msuhead").style.color = mainHead;
    document.getElementById("msuhead").style.fontFamily = headingFont;
    document.body.style.backgroundImage = bodyBackImg;
    var ele2 = document.getElementsByClassName("pancolo");
    panColor(ele2, tagClassName);
    var ele4 = document.getElementsByClassName("alerchan");
    alertColors(ele4, alerClassName);
                
    var ele5 = document.getElementsByClassName("btnfrm");
    btnColors(ele5, btnClassName);
}
            
function btnColors(ele5, alerClas)
{
    for(var i = 0; i < ele5.length; i++)
    {
        ele5[i].className = alerClas;            
    }
}
            
function alertColors(ele4, alerClas)
{
    for(var i = 0; i < ele4.length; i++)
    {
        ele4[i].className = alerClas;            
    }
}
            
function panColor(ele2, clas)
{
    for(var i = 0; i < ele2.length; i++)
    {
        ele2[i].className = clas;            
    }
}
            
function subHead(ele, col)
{
    for(var i = 0; i < ele.length; i++)
    {
        ele[i].style.color = col;            
    }
}
            
function textFont(ele3, col, fon)
{
    for(var i = 0; i < ele3.length; i++)
    {
        ele3[i].style.color = col;
        ele3[i].style.fontFamily = fon;
    }
}
            
function cBtn1()
{   
    reBut();
    regular("url('img/space.jpg')", "'Comic Sans MS', cursive, sans-serif", "black", "bttn2", "btn btn-primary active", "darkblue", "white", "black","url('img/ospace.jpg')","'Indie Flower', cursive","panel panel-info pancolo","alert alert-info alerchan","btn btn-info btnfrm");
}
            
function cBtn2()
{   
    reBut();
    regular("url('img/desert.jpg')", "'Lucida Console', Monaco, monospace", "black", "bttn3", "btn btn-warning active", "brown", "black", "black","url('img/odesert.jpg')","'Covered By Your Grace', cursive","panel panel-warning pancolo","alert alert-warning alerchan","btn btn-warning btnfrm");
}
            
function cBtn3()
{   
    reBut();
    regular("url('img/forest.jpg')", "Verdana, Geneva, sans-serif", "black", "bttn4", "btn btn-success active", "darkgreen", "white", "black","url('img/oforest.jpg')","'Satisfy', cursive","panel panel-success pancolo","alert alert-success alerchan","btn btn-success btnfrm");
}
            
function cBtn4()
{   
    reBut();
    regular("url('img/ocean.jpg')", "Tahoma, Geneva, sans-serif", "black", "bttn5", "btn btn-info active", "purple", "white", "black", "url('img/oocean.jpg')","'Architects Daughter', cursive","panel panel-danger pancolo","alert alert-danger alerchan","btn btn-danger btnfrm");
}
            
function def()
{   
    reBut();
    regular("none", "'Helvetica Neue', Helvetica, Arial, sans-serif", "black", "bttn1", "btn btn-default active", "black", "white", "white", "none","none","panel panel-default pancolo","alert alert-info alerchan","btn btn-default btnfrm");
    document.getElementById('mhead').style.opacity = "1"; 
    document.getElementById('mhead').style.textAlign = "center";
    document.getElementById('mhead').style.font = "60px 'Oleo Script', Helvetica, sans-serif";
    document.getElementById('msuhead').style.opacity = "1"; 
    document.getElementById('msuhead').style.textAlign = "center";
    document.getElementById('msuhead').style.font = "30px 'Oleo Script', Helvetica, sans-serif";
    document.getElementById('bgc').style.background = "none";
    document.getElementById('bgc').style.backgroundColor = "black";
}

function preload() {
    
    var sources = ['img/space.jpg', 'img/ospace.jpg', 'img/desert.jpg', 'img/odesert.jpg', 'img/forest.jpg', 'img/oforest.jpg', 'img/ocean.jpg', 'img/oocean.jpg'];
    
    for(var i = 1; i<=8 ; i++) {
        photolu = new Image();
        photolu.src = sources[i-1];
    }
}



function preventRefresh() {
    event.preventDefault();
    document.getElementById("contact").innerHTML = "Thank you for contacting me, I will get back to you soon.";
    processor();
}

def();