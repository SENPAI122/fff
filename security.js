// Inspect Security
(function () {
    if (!$('body').hasClass('debug_mode')) {
        var _z = console;
        Object.defineProperty(window, "console", {
            get: function () {
                if ((window && window._z && window._z._commandLineAPI) || {}) {
                    throw "Nice trick! but not permitted!";
                }
                return _z;
            },
            set: function (val) {
                _z = val;
            }
        });
    }
})();

// Disable Console
(function() {
    try {
        var $_console$$ = console;
        Object.defineProperty(window, "console", {
            get: function() {
                if ($_console$$._commandLineAPI)
                    throw "Sorry, for security reasons, the script console is deactivated on IbsterTech!";
                return $_console$$
            },
            set: function($val$$) {
                $_console$$ = $val$$
            }
        })
    } catch ($ignore$$) {
    }
})();
// Shortcut Security
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    }
   /*function check(e)
    {
    alert(e.keyCode);
    }*/
    document.onkeydown = function(e) {
        if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
            return false;
        }
       
};
$(document).keydown(function(e){
if(e.which === 123){

   return false;

}

});
$(document).bind("contextmenu",function(e) { 
e.preventDefault();
var currentHtmlContent;

var element = new Image();

var elementWithHiddenContent = document.querySelector("#element-to-hide");

var innerHtml = elementWithHiddenContent.innerHTML;



element.__defineGetter__("id", function() {

 currentHtmlContent= "";

});



setInterval(function() {

 currentHtmlContent= innerHtml;

 console.log(element);

 console.clear(); 

 elementWithHiddenContent.innerHTML = currentHtmlContent;

}, 1000);

$(document).keydown(function (event) {
if (event.keyCode == 123) { // Prevent F12
    return false;
} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
    return false;
}
});
});
$("input[name='yourinput']").keypress(function(event) {
if ( event.keyCode == 17 ) {
     event.preventDefault();
}
});
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    }
    document.onkeydown = function(e) {
        if(e.keyCode == 123) {
         return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
         return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
         return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
         return false;
        }
    
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
         return false;
        }      
     }


// Disable Ctrl + S (Saving Website, Downloading)
$(document).on('keydown', function(e) {
    if(e.ctrlKey && (e.key == "s" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
        e.cancelBubble = true;
        e.preventDefault();

        e.stopImmediatePropagation();
    }  
});
// Disable Ctrl + P (Printing)
$(document).on('keydown', function(e) {
    if(e.ctrlKey && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
        e.cancelBubble = true;
        e.preventDefault();

        e.stopImmediatePropagation();
    }  
});
// Disable Ctrl + O (Opening File)
$(document).on('keydown', function(e) {
    if(e.ctrlKey && (e.key == "o" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
        e.cancelBubble = true;
        e.preventDefault();

        e.stopImmediatePropagation();
    }  
});
// Disable View page Source
$(document).on('keydown', function(e) {
    if(e.ctrlKey && (e.key == "u" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80) ){
        e.cancelBubble = true;
        e.preventDefault();

        e.stopImmediatePropagation();
    }  
});

// Disable Browser Console(Extra layer of security)
$(document).keydown(function (event) {
// Prevent F12 -
if (event.keyCode == 123) {
   return false;
}
// Prevent Ctrl+a = disable select all
// Prevent Ctrl+u = disable view page source
// Prevent Ctrl+s = disable save
if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83 || event.keyCode ===65 )) {
   return false;
}
// Prevent Ctrl+Shift+I = disabled debugger console using keys open
else if (event.ctrlKey && event.shiftKey && event.keyCode === 73)
{
   return false;
}
});

// Prevent Ctrl + R(Reloading Tab With Keyboard)
$(document).ready(function () {
    $(document).on("keydown", function(e) {
        e = e || window.event;
        if (e.ctrlKey) {
            var c = e.which || e.keyCode;
            if (c == 82) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    });
});
// Disable Right Click, F12(Inspect Element) Ctrl + Shift + I(Inspect Element) Ctrl + Shift + J(Inspect Element) Ctrl + Shift + C(Inspect Element) Ctrl + U(View Page Source)
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }