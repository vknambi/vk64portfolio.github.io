

console.log("Connected");

let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme("light");
}else{
    setTheme(theme);
}



let themedot = document.getElementsByClassName('theme-dot')

for(var i=0; i< themedot.length; i++){
    themedot[i].addEventListener('click',function(){
        let mode=this.dataset.mode;
        console.log("Options Clicked",mode);
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode =="light"){
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode =="blue"){
        document.getElementById("theme-style").href="blue.css";
    }

    if(mode =="green"){
        document.getElementById("theme-style").href="green.css";
    }

    if(mode =="purple"){
        document.getElementById("theme-style").href="purple.css";
    }

    localStorage.setItem('theme',mode);
}


let sub = document.getElementById('submit-btn');

sub.addEventListener("click", function(){ alert("Your Message sent Successfully"); });