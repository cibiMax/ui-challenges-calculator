const dialpadArr = ["7", "8", "9", "del", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x", "Reset", "="];

document.addEventListener("DOMContentLoaded", () => {
          var a = 0;
    const displayVal = document.getElementById("display");
    displayVal.innerText=a;

    const dialpad = document.getElementById("dialpad");
    dialpadArr.forEach((e, i) => {
        const btn = document.createElement("button");
        btn.name = "calc";
        btn.innerText = e;
        btn.value = e;
        dialpad.append(btn);
        btn.classList.add("numeric-btn");
        if (i > dialpadArr.length - 3) {
            btn.classList.add("col-span-2")
        }
        if (i === dialpadArr.length - 1) {
            btn.classList.add("equal-btn")
        }
        if (i == 3 || i === dialpadArr.length - 2) {
            btn.classList.add("reset-btn");
        }

    });


    document.getElementById("theme-group").addEventListener("change", e => {
        if (e.target.name === "theme") {
            if (e.target.value === "red") {

                const link = document.querySelector("link[type='text/css']");
                if (link) {
                    link.setAttribute("href", "./index.css")
                }


            }
            if (e.target.value === "lightblue") {

                const link = document.querySelector("link[type='text/css']");
                if (link) {
                    link.setAttribute("href", "./theme3.css")
                }


            }
            if (e.target.value === "orange") {

                const link = document.querySelector("link[type='text/css']");
                if (link) {
                    link.setAttribute("href", "./theme2.css")
                }


            }

        }


    }
    );


    document.getElementById("dialpad").addEventListener("click", (e) => {

        if (e.target.name === "calc") {
      
            var value = e.target.value;
            if (value === "del") {
                displayVal && (displayVal.innerText = (displayVal.innerText || "").slice(0, -2));

            }
            else if (value === "Reset") {
                displayVal.innerText = null;

            } else if (value === "=") {
displayVal.innerText=a;
            }
            else if (value === "+") {

                a += parseFloat(displayVal.innerText);
                
                displayVal.innerText = a;

            }
            else if (value === "-") {
                a -= parseFloat(displayVal.innerText);
            }
            else if (value === "X") {
                a *= parseFloat(displayVal.innerText);

            } else if (value === "/") {
                a /= parseFloat(displayVal.innerText);
            }
            else {
                displayVal.innerText = displayVal.innerText !== null ? displayVal.innerText + value : value;

            }

        }
    })

});


