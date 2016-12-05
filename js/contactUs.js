var xmlHttp2 = updateXmlHttp();

function updateXmlHttp() {
    var xmlHttp2;
    
    if(window.XMLHttpRequest)
        xmlHttp2 = new XMLHttpRequest;
    else 
        xmlHttp2 = new ActiveXObject("Microsoft_XMLHTTP");
    
    return xmlHttp2;
}

function processor() {
    event.preventDefault();
    
    if(xmlHttp2) {
        
        var name = document.thisform.name.value;

        var email = document.thisform.email.value;

        var message = document.thisform.message.value;
        
        if(name == "" || email == "" || message == "") {
            document.getElementById("contact").innerHTML = "Please fill the form, before submitting it.";
        } else {
            document.thisform.name.value = "";
            document.thisform.email.value = "";
            document.thisform.message.value = "";
            document.getElementById("messleng").innerHTML = "200 / 200 charecters remaining";
            document.getElementById("contact").innerHTML = "Thank you for contacting me, I will get back to you soon.";

            xmlHttp2.open("GET", "http://32.208.103.170/resumecontact.php?name="+name+"&email="+email+"&message="+message, true);
            xmlHttp2.onreadystatechange = handleResponse2;
            xmlHttp2.setRequestHeader("Access-Control-Allow-Origin","*");
            xmlHttp2.setRequestHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS");
            xmlHttp2.send();   
        }
    }
}

function handleResponse2() {
    if(xmlHttp2.readyState == 4 && xmlHttp2.status == 200) {
        response = xmlHttp2.responseXML;
        root = response.documentElement;
        status = root.firstChild;
        console.log(status);
    } else {
        console.log(xmlHttp2.statusText);
    }
}