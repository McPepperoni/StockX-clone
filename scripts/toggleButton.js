function SizeMenuFunction() {
    var x = document.getElementById("Menu-indicator");
    if (x.style.content === "url(../Assets/svg/Down-Arrow-No-Body.svg)") {
      x.style.content = "url(../Assets/svg/Up-Arrow-No-Body.svg)";
    } 
    if (!x.style.content == "url(../Assets/svg/Down-Arrow-No-Body.svg)") {
      x.style.content = "url(../Assets/svg/Down-Arrow-No-Body.svg)";
    }

    var y = document.getElementById("Size-dropdown");

    if (y.style.display === "none") {
      y.style.display = "block";
    } 
    else {
      y.style.display = "none";
    }
  } 