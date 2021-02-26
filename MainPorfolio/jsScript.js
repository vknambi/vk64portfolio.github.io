

console.log("Connected");

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme("light");
} else {
    setTheme(theme);
}



let themedot = document.getElementsByClassName('theme-dot')

for (var i = 0; i < themedot.length; i++) {
    themedot[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        console.log("Options Clicked", mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == "light") {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == "blue") {
        document.getElementById("theme-style").href = "blue.css";
    }

    if (mode == "green") {
        document.getElementById("theme-style").href = "green.css";
    }

    if (mode == "purple") {
        document.getElementById("theme-style").href = "purple.css";
    }

    localStorage.setItem('theme', mode);
}




//API Integration

document.getElementById('submit-btn').addEventListener('click', postdetails);

function postdetails() {

    let Name = document.getElementById('Name').value;
    let Subject = document.getElementById('Subject').value;
    let Email = document.getElementById('Email').value;
    let Message = document.getElementById('Message').value;


    console.log(Name, Subject, Email, Message);

    let Obj =
    {
        "name": Name,
        "email": Subject,
        "subject": Email,
        "message": Message

    }

    console.log(JSON.stringify(Obj));

    async function contact() {
        try {
            let request = await fetch("http://localhost:8080/portofolioapi/Post", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(Obj)
            });
            let data = await request.json();
            console.log(data);

            if (request.status === 200) {
                if (data.status.code === 201) {

                    alert(data.status.message);
                }
                if (data.status.code === 200) {
                    alert('Message sent!');
                    function myFunction() {
                        document.getElementById("contact-form").reset();

                      }
                    myFunction();
                }
            } else {
                alert(request.status)
            }

        } catch (error) {
            alert(error)
        }
    }
    contact();

}



