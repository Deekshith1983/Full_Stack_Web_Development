

// VANTA.BIRDS({
//   el: "#vanta-bg",
//    mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   color1: 0xac3737,
//   color2: 0x1dca2d,
//   backgroundAlpha: 0.00
// })

// JAvascript Events for mouseover and mouseout
const box=document.getElementsByClassName("box1")[0];
box.addEventListener("mouseover", function() {
    box.innerHTML="Mouse is in the box";

});

box.addEventListener("mouseout", function() {
    box.innerHTML="Mouse is out of the box";
});
// JavaScript event for mousemove
const box2=document.getElementsByClassName("box2")[0];
box2.addEventListener("mousemove", function(event) {
    const x=event.clientX;
    const y=event.clientY;
    box2.innerHTML=`Mouse coordinates: (${x}, ${y})`;
});
// JavaScript events for mouseup and mousedown
// const button3=document.getElementById("myButton3");
// button3.addEventListener("mousedown", function() {
//     button3.style.backgroundColor="red";
//     button3.innerHTML="Button Pressed!";
//     button3.style.color="white";
// });
// button3.addEventListener("mouseup", function() {
//     button3.style.backgroundColor="yellow";
//     button3.innerHTML="Button Released!";
//     button3.style.color="black";
// });

function Press() {
    const button3=document.getElementById("myButton3");
    button3.addEventListener("mousedown", function() {
        button3.style.backgroundColor="red";
        button3.innerHTML="Button Pressed!";
        button3.style.color="white";
    }
    );
    button3.addEventListener("mouseup", function() {
        button3.style.backgroundColor="yellow";
        button3.innerHTML="Button Released!";
        button3.style.color="black";
    }
    );
}


// JavaScript event for onkeydown
function keydown() {
  const k=document.getElementById("myInput1");
  k.addEventListener("keydown", function (event) {
  document.getElementById("demo").innerHTML = "You pressed: " + event.key;
});
}

// JavaScript event for onkeyup
function keyup() {
    const k2=document.getElementById("myInput2");
    k2.addEventListener("keyup", function (event) {
    document.getElementById("demo2").innerHTML = "You released: " + event.key;
  });
}

//Javascript event for onkeypress
function keypress() {
    const k3=document.getElementById("myInput3");
    k3.addEventListener("keypress", function (event) {
    document.getElementById("demo3").innerHTML = "You pressed: " + event.key;
  });
}
//keydown and keypress events are similar but keydown is triggered when the key is pressed down, while keypress is triggered when a character key is pressed.

//Javascript event for onload
function load() {
    document.getElementById("loadDemo").innerHTML = "Content loaded successfully!";
}

// DOMContentLoaded event - fires when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("domDemo").innerHTML = "DOM fully loaded and parsed!";
});

// Window load event - fires when entire page is loaded (including images, stylesheets, etc.)
window.addEventListener("load", function() {
    document.getElementById("windowLoadDemo").innerHTML = "Window fully loaded (all resources)!";
});

// ============ TIMING EVENTS ============

// setInterval - Clock that updates every second
setInterval(showtime, 1000);
function showtime() {
    const d = new Date();
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');
    document.getElementById("cdemo").innerHTML = `Current Time: ${hours}:${minutes}:${seconds}`;
}

// setTimeout - Delayed execution
let timeoutId;
function startTimeout() {
    document.getElementById("timeoutDemo").innerHTML = "Timeout started... waiting 3 seconds";
    
    timeoutId = setTimeout(function() {
        document.getElementById("timeoutDemo").innerHTML = "Timeout completed! 3 seconds have passed.";
    }, 3000);
}

// clearTimeout - Cancel the timeout
function stopTimeout() {
    clearTimeout(timeoutId);
    document.getElementById("timeoutDemo").innerHTML = "Timeout cancelled!";
}

// setInterval - Counter that increments every second
let counterInterval;
let counter = 0;

function startCounter() {
    counter = 0;
    document.getElementById("counterDemo").innerHTML = "Counter: " + counter;
    
    counterInterval = setInterval(function() {
        counter++;
        document.getElementById("counterDemo").innerHTML = "Counter: " + counter;
    }, 1000);
}

// clearInterval - Stop the counter
function stopCounter() {
    clearInterval(counterInterval);
    document.getElementById("counterDemo").style.color = "red";
}

