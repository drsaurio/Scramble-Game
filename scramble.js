var Request = false; 
      var aWordArray = new Array(2);

      function getWord(url, elementID) {

        if (window.XMLHttpRequest) {
          Request = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          Request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if(Request) {
          var RequestObj = document.getElementById(elementID);
          Request.open("GET", url, true);
          Request.onreadystatechange = function() {
            if (Request.readyState === 4 && Request.status === 200) {
              aWordArray = Request.responseText.split(" ");
              RequestObj.innerHTML = aWordArray[1];
            }
          };
          Request.send(null);
        }
      }

      function StartGame() {
        document.getElementById("showBtn").style.visibility="visible";
        document.getElementById("inputField").style.visibility="visible";
        document.getElementById("inputField").value="";
        document.getElementById('ScrambledDiv').innerHTML = "";
        document.getElementById("ScrambledHeading").style.visibility="visible";
        document.getElementById("UnscrambledHeading").style.visibility="visible";

        getWord("scramble.php?x=" + Math.round(1 + Math.random() * 9),
          "ScrambledDiv");

  

      }
