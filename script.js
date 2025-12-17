var container=document.getElementById("container");
var usAg=navigator.userAgent;
var pageNames=["Weatherify","Notehub","Pacman","Quotes","Currency Converter","Password Manager","HealthTracker","Triliza","Test","Bluetooth Controler","Χριστούγεννα"];
var pageBgImg=["../weatherApp/assets/images/sky.jpg","../notesApp/images/note.png","","","","","../healthApp/images/healthIcon.png","","","",""];
var pageURLS=["../weatherApp","../notesApp","","","","","../healthApp","","","../BluetoothApp","./Christmas"];
for(var i=0;i<pageNames.length;i++){
    var page=document.createElement("div");
    page.className="pages";
    var link = document.createElement("a");
    link.style.backgroundImage="url("+pageBgImg[i]+")";
    link.style.backgroundRepeat="no-repeat";
    link.style.backgroundPosition="center";
    link.style.backgroundSize="contain";
    link.textContent=pageNames[i];
    link.href = pageURLS[i];
    if(!pageURLS[i]){
        link.href="../404";
    }
    link.style.textDecoration = "none";
    page.appendChild(link);
    container.appendChild(page);
}
document.title=appName;
document.getElementById('favicon').href=favicon;







