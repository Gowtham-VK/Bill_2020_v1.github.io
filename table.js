
function generate()
{
    
   jarray =JSON.parse(sessionStorage.getItem("jarray"))
   //console.log(jarray);
   amtRs =JSON.parse(sessionStorage.getItem("amtRs"))
   //console.log(amtRs);
   length =sessionStorage.getItem("length")
   User =sessionStorage.getItem("User")
   Email =sessionStorage.getItem("Email")
   Address =sessionStorage.getItem("Address")
   Dates =sessionStorage.getItem("Dates")
   Discount =sessionStorage.getItem("Discount")
   Bill =sessionStorage.getItem("Bill")
   Gst = sessionStorage.getItem("Gst")
   Total = sessionStorage.getItem("Total")
   Phone = sessionStorage.getItem("Phone")
   value = sessionStorage.getItem("value")
   quantity =JSON.parse(sessionStorage.getItem("quanty"))
   ////console.log(quantity);
//    quantity = sessionStorage.getItem("quanty")
fin= Total-Discount
Option =sessionStorage.getItem("Option")

Gst = sessionStorage.getItem("Gst")


   document.getElementById("inv").innerText=Bill
   document.getElementById("dates").innerText=Dates
   document.getElementById("discount").innerHTML=Discount
   document.getElementById("subtotal").innerHTML=Total
   document.getElementById("total").innerHTML= fin
   document.getElementById("email").innerHTML="Email : "+Email
   document.getElementById("address").innerHTML=Address
   document.getElementById("username").innerHTML=User
   document.getElementById("Phone").innerHTML="Mob : "+ Phone
   document.getElementById("datE").innerHTML="Date : "+Dates
   document.getElementById("subtot").innerHTML=fin
   

   if(value==1){
      tit="SAMASHTI MEDIA VENTURES PVT. LTD."
  titVal= tit.fontcolor("#aa2327")
  document.getElementById("title").innerHTML=titVal
   document.getElementById("logo").src="./SMV-title (2).png"
   document.getElementById("cin").innerHTML="CIN No : U74999KA2018PTC109692"
   document.getElementById("gst").innerHTML="GSTIN No : 29AAZCS7602Q1Z4"
   document.getElementById("ifsc").innerHTML="CORP0001973"
   document.getElementById("bank").innerHTML="Union Bank"
   document.getElementById("accnt").innerHTML="510101006411033"
   document.getElementById("Bname").innerHTML="Samashti Media Ventures Pvt. Ltd."
   document.getElementById("GstB").innerHTML="GSTIN :"+Gst
   document.getElementById("emailId").innerHTML="support@samashtimedia.com"
   
}
    if (value==3){
    tit="KUNDAPRA.COM"
    titVal= tit.fontcolor("#aa2327")
    document.getElementById("title").innerHTML=titVal
     document.getElementById("logo").src=""

}
    var num_rows = length
    var theader = '<table border="">\n';
    var tbody = '';
////console.log(Discount);
    
    for( var i=0; i<num_rows;i++) 
    {
        tbody += '<tr>';
        // for( var j=0; j<num_cols;j++)
        // {
            tbody += '<td>';
            tbody += '<h6 class="mb-0">' + `${jarray[i]}`
            tbody += '</td>'
            tbody += '<td>';
            tbody += `${quantity[i]}`
            tbody += '</td>'
            tbody += '<td>';
            tbody += `${amtRs[i]}`;
            tbody += '</td>'
        
        tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById("add").innerHTML = theader + tbody + tfooter;

    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            //console.log(invoice);
            //console.log(window);
            var opt = {
                margin: 0.15,
                filename: "SMV Billing"+" "+`${Dates}.pdf`,
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 3 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })

        

            var a = ['','One ','Two ','Three ','Four ', 'Five ','Six ','Seven ','Eight ','Nine ','Ten ','Eleven ','Twelve ','Thirteen ','Fourteen ','Fifteen ','Sixteen ','Seventeen ','Eighteen ','Nineteen '];
        var b = ['', '', 'Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];
       
       function inWords (num) {
           if ((num = num.toString()).length > 9) return 'overflow';
           n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
           if (!n) return; var str = '';
           str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
           str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
           str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
           str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
           str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + '' : '';
           return str;
       }
       
       number = function (x) {
            amt= inWords(x);
           //console.log(amt);
       }
       number(fin)
    document.getElementById("totWords").innerHTML=amt+"Only"

    if(Option==2){
        gst()
        function gst(){

        Gst=9/100*fin
        Cgst=9/100*fin
        var l=Cgst.toFixed(2)
        var m =Gst.toFixed(2)
        subTot=Gst+Cgst+fin
        var n = subTot.toFixed()
        number(n)
        document.getElementById("totWords").innerHTML=amt+"Only"
        document.getElementById("discount").innerHTML= Discount
        document.getElementById("subtot").innerHTML=fin
        document.getElementById("total").innerHTML= n
            var tbodyRef = document.getElementById('tBody');
            //console.log(tbodyRef);
            var newRow = tbodyRef.insertRow(3);
            var y = newRow.insertCell(0);
            var z = newRow.insertCell(1);
            y.outerHTML  = '<th class="text-left">SGST<span class="font-weight-normal">(9%)</span></</th>'
           
            z.innerHTML =`${m}`;
            var newRow = tbodyRef.insertRow(4);
            var a = newRow.insertCell(0);
            var b = newRow.insertCell(1);
            a.outerHTML  = '<th class="text-left">CGST<span class="font-weight-normal">(9%)</span></</th>'
           
            b.innerHTML = `${l}`;
            z.setAttribute('class', 'text-right');
             b.setAttribute('class', 'text-right');
        
        }
        
    }
    else if(Option==3){

    cgst()
    function cgst(){
        
        Cgst=18/100*fin
        var l=Cgst.toFixed(2)
        subTot=Cgst+fin
        var n = subTot.toFixed()
        number(n)
        document.getElementById("totWords").innerHTML=amt+"Only"
        document.getElementById("total").innerHTML= subTot
        document.getElementById("discount").innerHTML= Discount
        document.getElementById("subtot").innerHTML=fin
        var tbodyRef = document.getElementById('tBody');
        //console.log(tbodyRef);
        var newRow = tbodyRef.insertRow(3);
        var y = newRow.insertCell(0);
        var z = newRow.insertCell(1);
        y.outerHTML  = '<th class="text-left">IGST<span class="font-weight-normal">(18%)</span></</th>'
       
        z.innerHTML =`${l}`;
      
        z.setAttribute('class', 'text-right');
       
    
    }
    
    }
    else{
        //console.log("");
    }
}

