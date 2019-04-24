var dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('#more_by'));
let drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('#menu-button').addEventListener('click', () => drawer.open = true);
var theme_dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector("#theme"));
mdc.autoInit();
        mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
        var buttons = document.querySelectorAll(".calcbutton");
        var result = document.querySelector(".results");
        var copybutton = document.querySelector(".calcbuttoncopy");
		var equation = 0;
	document.querySelector("#panel").addEventListener("click", function() {
		chrome.windows.create({url: "calc.html", type: "popup", width: 450, height: 700}, function() {
			
		});
	});
	document.querySelector("#more_by_button").addEventListener("click", function() {
		dialog.show();
		drawer.open = false;
	});
	document.querySelector("#theme_button").addEventListener("click", function() {
		theme_dialog.show();
		drawer.open = false;
	});
        function CopyToClipboard(containerid) {
            if (document.selection) {
                document.body.style.userSelect = "all";
                var range = document.body.createTextRange();
                range.moveToElementText(document.querySelector(containerid));
                range.select().createTextRange();
                document.execCommand("Copy");
                //document.body.style.userSelect = "none";
            } else if (window.getSelection) {
                document.body.style.userSelect = "all";
                var range = document.createRange();
                range.selectNode(document.querySelector(containerid));
                rangy = window.getSelection().addRange(range);
                document.execCommand("Copy");
                document.body.style.userSelect = "none";
            }
        }
     function asmd(text) {
        var values = text.split("+");

        return parseInt(values[0]) + parseInt(values[1]);
    }
        buttons[0].addEventListener("click", function () {
        	if (result.innerText == "0") {
        		result.innerHTML = "7";
        		equation = "7";
        	}
        	else {
        		result.innerHTML += 7;
        		equation += "7";
        	}
		});
        buttons[1].addEventListener("click", function () {
        	if (result.innerText == "0") {
        		result.innerHTML = "8";
        		equation = "8";
        	}
        	else {
        		result.innerHTML += 8;
        		equation += "8";
        	}
        });
        buttons[2].addEventListener("click", function () {
        	if (result.innerText == "0") {
        		result.innerHTML = "9";
        		equation = "9";
        	}
        	else {
        		result.innerHTML += 9;
        		equation += "9";
        	}
        });
        buttons[3].addEventListener("click", function () {
        	result.innerHTML += " &divide; ";
        	equation += "/";
        });
        buttons[4].addEventListener("click", function () {
            if (result.innerText == "0") {
        		result.innerHTML = "4";
        		equation = "4";
        	}
        	else {
        		result.innerHTML += 4;
        		equation += "4";
        	}
        });
        buttons[5].addEventListener("click", function () {
            if (result.innerText == "0") {
        		result.innerHTML = "5";
        		equation = "5";
        	}
        	else {
        		result.innerHTML += 5;
        		equation += "5";
        	}
        });
        buttons[6].addEventListener("click", function () {
        	if (result.innerText == "0") {
        		result.innerHTML = "6";
        		equation = "6";
        	}
        	else {
        		result.innerHTML += 6;
        		equation += "6";
        	}
        });
        buttons[7].addEventListener("click", function () {
        	result.innerHTML += " &times; ";
        	equation += "*";
        });
        buttons[8].addEventListener("click", function () {
            if (result.innerText == "0") {
        		result.innerHTML = "1";
        		equation = "1";
        	}
        	else {
        		result.innerHTML += 1;
        		equation += "1";
        	}
        });
        buttons[9].addEventListener("click", function () {
            if (result.innerText == "0") {
        		result.innerHTML = "2";
        		equation = "2";
        	}
        	else {
        		result.innerHTML += 2;
        		equation += "2";
        	}
        });
        buttons[10].addEventListener("click", function () {
            if (result.innerText == "0") {
        		result.innerHTML = "3";
        		equation = "3";
        	}
        	else {
        		result.innerHTML += 3;
        		equation += "3";
        	}
        });
        buttons[11].addEventListener("click", function () {
            result.innerHTML += " - ";
        	equation += "-";
        });
        buttons[12].addEventListener("click", function () {
                	if (result.innerText == "0") {
        		result.innerHTML = "0";
        		equation = "0";
        	}
        	else {
        		result.innerHTML += 0;
        		equation += "0";
        	}
        });
        buttons[13].addEventListener("click", function () {
		    if (result.innerText == "0") {
        		result.innerHTML = ".";
        		equation = "0.";
        	}
        	else {
        		result.innerHTML += ".";
        		equation += ".";
        	}
        });
        buttons[14].addEventListener("click", function () { 
        	result.innerHTML = stringMath(equation); 
        	equation = stringMath(equation);          
        });
        buttons[15].addEventListener("click", function () {
            result.innerHTML += " + ";
        	equation += " + ";
        });
        document.querySelector(".clear").addEventListener("click", function() {
        	equation = 0;
        	result.innerHTML = 0;
        });
        copybutton.addEventListener("click", function () {
            CopyToClipboard(".results");
        });

        document.querySelector("#dark").addEventListener("click", function(){
		document.body.style.color = "white";
		document.body.style.backgroundColor = "black";
		result.style.backgroundColor = "black";
		result.style.color = "white";
		document.querySelector(".mdc-button").style.backgroundColor = "black!important";
		document.querySelector(".mdc-button").style.color = "white!important";
		document.querySelector(".mdc-dialog__surface").style.background = "white";
		document.querySelector(".mdc-dialog__surface").style.color = "black";
		document.querySelector("#mdc-dialog-with-list-label").style.color = "black";
		for (i = 0; i < document.querySelectorAll(".calcbutton").length; i++) {
			document.querySelector("p").style.color = "white";
			document.querySelectorAll(".calcbutton")[i].style.backgroundColor = "black";
			document.querySelectorAll(".calcbutton")[i].style.color = "white";
			document.querySelectorAll(".mdc-grid-tile__primary")[i].style.backgroundColor = "black";
			document.querySelectorAll(".mdc-grid-tile__primary")[16].style.backgroundColor = "black";
			document.querySelectorAll(".mdc-grid-tile__primary")[17].style.backgroundColor = "black";
			document.querySelectorAll(".mdc-grid-tile__primary")[18].style.backgroundColor = "black";
			document.querySelectorAll(".mdc-grid-tile__primary")[19].style.backgroundColor = "black";
		};
	});
	document.querySelector("#light").addEventListener("click", function(){
		document.body.style.color = "black";
		document.body.style.backgroundColor = "white";
		result.style.backgroundColor = "white";
		result.style.color = "black";
		document.querySelector(".mdc-button").style.backgroundColor = "white";
		document.querySelector(".mdc-button").style.color = "#3f51b5";
		document.querySelector("#mdc-dialog-with-list-label").style.color = "black";
		for (i = 0; i < document.querySelectorAll(".calcbutton").length; i++) {
			document.querySelectorAll(".calcbutton")[i].style.backgroundColor = "white";
			document.querySelector("p").style.color = "black";
			document.querySelectorAll(".calcbutton")[i].style.color = "#3f51b5";
			document.querySelectorAll(".mdc-grid-tile__primary")[i].style.backgroundColor = "white";
			document.querySelectorAll(".mdc-grid-tile__primary")[16].style.backgroundColor = "white";
			document.querySelectorAll(".mdc-grid-tile__primary")[17].style.backgroundColor = "white";
			document.querySelectorAll(".mdc-grid-tile__primary")[18].style.backgroundColor = "white";
			document.querySelectorAll(".mdc-grid-tile__primary")[19].style.backgroundColor = "white";
		};
	});
