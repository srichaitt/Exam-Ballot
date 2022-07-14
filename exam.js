
        let a;
        var v;
        function first() {
            document.getElementById("divimg").style.visibility = "visible";
            document.getElementById("b1").style.visibility = "hidden";
            v = 1;
        }
        function second() {
            document.getElementById("divimg1").style.visibility = "visible";
            document.getElementById("b2").style.visibility = "hidden";
            v = 2;
        }
        function third() {
            document.getElementById("divimg2").style.visibility = "visible";
            document.getElementById("b3").style.visibility = "hidden";
            v = 3;
        }
        function fourth() {
            document.getElementById("divimg3").style.visibility = "visible";
            document.getElementById("b4").style.visibility = "hidden";
            v = 4;
        }
        function fifth() {
            document.getElementById("divimg4").style.visibility = "visible";
            document.getElementById("b5").style.visibility = "hidden";
            v = 5;
        }
        function sixth() {
            document.getElementById("divimg5").style.visibility = "visible";
            document.getElementById("b6").style.visibility = "hidden";
            v = 6;
        }
        function seventh() {
            document.getElementById("divimg6").style.visibility = "visible";
            document.getElementById("b7").style.visibility = "hidden";
            v = 7;
        }
        function eight() {
            document.getElementById("divimg7").style.visibility = "visible";
            document.getElementById("b8").style.visibility = "hidden";
            v = 8;
        }
        function ninth() {
            document.getElementById("divimg8").style.visibility = "visible";
            document.getElementById("b9").style.visibility = "hidden";
            v = 9;
        }
        var congress = 0;
        var bjp = 0;
        var tdp = 0;
        var ysr = 0;
        var lok = 0;
        var cpm = 0;
        var trs = 0;
        var prp = 0;
        var janasena = 0;
        var total = 0;
        function ok() {
            document.getElementById("b1").style.visibility = "visible";
            document.getElementById("divimg").style.visibility = "hidden";
            document.getElementById("b2").style.visibility = "visible";
            document.getElementById("divimg1").style.visibility = "hidden";
            document.getElementById("b3").style.visibility = "visible";
            document.getElementById("divimg2").style.visibility = "hidden";
            document.getElementById("b4").style.visibility = "visible";
            document.getElementById("divimg3").style.visibility = "hidden";
            document.getElementById("b5").style.visibility = "visible";
            document.getElementById("divimg4").style.visibility = "hidden";
            document.getElementById("b6").style.visibility = "visible";
            document.getElementById("divimg5").style.visibility = "hidden";
            document.getElementById("b7").style.visibility = "visible";
            document.getElementById("divimg6").style.visibility = "hidden";
            document.getElementById("b8").style.visibility = "visible";
            document.getElementById("divimg7").style.visibility = "hidden";
            document.getElementById("b9").style.visibility = "visible";
            document.getElementById("divimg8").style.visibility = "hidden";
            if (v == 1) {

                congress = congress + 1;
            }
            else if (v == 2) {

                bjp = bjp + 1;
            }
            else if (v == 3) {

                tdp = tdp + 1;
            }
            else if (v == 4) {

                ysr = ysr + 1;
            }
            else if (v == 5) {

                lok = lok + 1;
            }
            else if (v == 6) {

                cpm = cpm + 1;
            }
            else if (v == 7) {

                trs = trs + 1;
            }
            else if (v == 8) {

                prp = prp + 1;
            }
            else if (v == 9) {
                janasena = janasena + 1;
            }
            total = total + 1;

        }
        function wrong() {
            document.getElementById("b1").style.visibility = "visible";
            document.getElementById("divimg").style.visibility = "hidden";
            document.getElementById("b2").style.visibility = "visible";
            document.getElementById("divimg1").style.visibility = "hidden";
            document.getElementById("b3").style.visibility = "visible";
            document.getElementById("divimg2").style.visibility = "hidden";
            document.getElementById("b4").style.visibility = "visible";
            document.getElementById("divimg3").style.visibility = "hidden";
            document.getElementById("b5").style.visibility = "visible";
            document.getElementById("divimg4").style.visibility = "hidden";
            document.getElementById("b6").style.visibility = "visible";
            document.getElementById("divimg5").style.visibility = "hidden";
            document.getElementById("b7").style.visibility = "visible";
            document.getElementById("divimg6").style.visibility = "hidden";
            document.getElementById("b8").style.visibility = "visible";
            document.getElementById("divimg7").style.visibility = "hidden";
            document.getElementById("b9").style.visibility = "visible";
            document.getElementById("divimg8").style.visibility = "hidden";
            
        }
        function reset() {
            
             congress = 0;
             bjp = 0;
             tdp = 0;
             ysr = 0;
             lok = 0;
             cpm = 0;
             trs = 0;
            prp = 0;
            janasena = 0;
             total = 0;
        }
        
        function count() {
             a = window.open('', '', 'height=600, width=600');
            
            a.document.write(' <h1>Congress votes :' + congress + '<br>');
            a.document.write(' <h1>BJP votes:' + bjp + '<br>');
            a.document.write(' <h1>TDP votes :' + tdp + '<br>');
            a.document.write(' <h1>YSR votes:' + ysr + '<br>');
            a.document.write(' <h1>Loksatha votes :' + lok + '<br>');
            a.document.write(' <h1>CPM votes:' + cpm + '<br>');
            a.document.write(' <h1>TRS votes:' + trs + '<br>');
            a.document.write(' <h1>PRP votes:' + prp + '<br>');
            a.document.write(' <h1>Janasena votes: + janasena + '<br>');
            a.document.write(' <h1>TOTAL votes:' + total + '<br>');
            
        }
        function windowclose() {
            
            a.close();
        }
        

        function poweron() {
            document.getElementById("div1").style.visibility = "hidden";
            document.getElementById("btn1").style.backgroundColor = "red";
        }
        function poweroff() {
            document.getElementById("div1").style.visibility = "visible";
            document.getElementById("btn1").style.backgroundColor = "green";
        }
        

 