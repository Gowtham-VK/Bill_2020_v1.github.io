
// Material Select Initialization


$(document).ready(function() {
    $(".add-more").on('click', function(){ 
        var html = $(".copy-fields").clone();
        $(".after-add-more").after(html[0]);
    });

    $("body").on("click",".remove",function(){ 
        $(this).parents(".control-group").remove();
    });
});


$(function() {

    // Dynamically add/remove inputs for any field[]'s
    $('.multi-field-wrapper').each(function() {
      var $wrapper = $('.multi-fields', this);
      // Add button
      $(".add-field", $(this)).click(function(e) {
        $('.multi-field:first-child', $wrapper).clone(true).appendTo($wrapper).find('input').val('').focus();
      });
      // Remove buttons
      $('.multi-field .remove-field', $wrapper).click(function() {
        if ($('.multi-field', $wrapper).length > 1)
          $(this).parents('.multi-field').remove();
      });
    });
  
  });
  

$(document).ready(function()
{
    var max_fields = 10; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".btn-outline-info"); //Add button ID
  
    var x = 1; //initlal text box count
    $(add_button).click(function(e) { //on add input button click
      e.preventDefault();
      if (x < max_fields) { //max input box allowed
        x++; //text box increment
        $(wrapper).append('<div class="row"><div class="col mb-3"> <input class="form-control" type="text" name="mytext[]" autocomplete="off" placeholder="Particulars"/></div><div class="col-md-2"><input class="form-control" type="number" name="mytext[]" autocomplete="off" placeholder="Ouantity"/></div><div class="col-md-2"><input class="form-control" type="number" name="mytext[]" autocomplete="off" placeholder="Amount" required/></div><div class="col-md-1"><a href="#" class="remove_field btn btn-outline-warning btn-sm">Remove</a></div></div>'); //add input box
      }
    });
  
    $(wrapper).on("click", ".remove_field", function(e) { //user click on remove text
      e.preventDefault();
      $(this).parents('.row').remove();
      x--;
    });
    


    $('.submit').click(function() {

      if(document.getElementById("uid").value.length==0||document.getElementById("bill").value.length==0||document.getElementById("email").value.length==0||document.getElementById("example-date-input").value.length==0||document.getElementById("Gst").value.length==0){
        
        window.alert("Please Enter all Fields")
        
      }
      else{}

      list = wrapper.find('input').map(function() {
        return $(this).val();
      }).get();
      // send to server here
      var a = document.getElementById("uid").value
      var b = document.getElementById("bill").value
      var c = document.getElementById("email").value
      var d = document.getElementById("Address").value
      var e = document.getElementById("startdate").value
      var k = document.getElementById("Phone").value
       pro = document.getElementById("pro")
       sam = document.getElementById("sam")
       j = document.getElementById("Gst").value
      
      
      
      ////console.log(j);
      
      User = a
       sessionStorage.setItem("User",User);

      Bill = b
      sessionStorage.setItem("Bill",Bill);

      Email = c
       sessionStorage.setItem("Email",Email);
      
      Address= d
       sessionStorage.setItem("Address",Address);

      Dates = e
       sessionStorage.setItem("Dates", Dates);

       Phone = k
       sessionStorage.setItem("Phone", Phone);



      Gst = j
      sessionStorage.setItem("Gst",Gst) 
     
     values=list.length
     //console.log(values);
      arrStr=list;
      discript=[]
      amount=[]
      quantity=[]
      
        for(var i=2; i <list.length; i=i+3) 
        
      {  // take every second element
          amount.push(list[i]);
      }
      for(var i=0; i <list.length; i=i+3) {
        discript.push(list[i]);
      }
      for(var i=1; i <list.length; i=i+3) {
        quantity.push(list[i]);
      }
      //console.log();
      //console.log(quantity);
      jarray = discript
       sessionStorage.setItem("jarray",JSON.stringify(jarray));
       amtRs = amount
       sessionStorage.setItem("amtRs",JSON.stringify(amtRs));
       num = amount.map((i)=>Number(i));
       qnt= quantity.map((i)=>Number(i));
       quanty = quantity
       sessionStorage.setItem("quanty",JSON.stringify(quanty));
      //console.log(num);
       
       length = discript.length
       sessionStorage.setItem("length",length);
      //  jarray = list
      //  sessionStorage.setItem("jarray",JSON.stringify(jarray));
      function sum (arr){
          s=0;
          for(var i=0; i<arr.length;i++){
              
              s=s+arr[i];
              
          }
         //console.log(list); 
          totVal = document.getElementById("tot")
          
          totVal.value=`${s}`
          //console.log(totVal.value);
          
      }
      
      sum(num)
      
      Total = s
       sessionStorage.setItem("Total",Total);
      
      
    });
    
  });

  function disFun(){
    var f = document.getElementById("dis").value
    Discount =f
    sessionStorage.setItem("Discount",Discount) 
  }
 function sel(){
  if(sam.checked) 
  { value = 1}
  //console.log(value);}
  else{value=0}
  // if(value=1){
  //   sel()
  // }
  // else{
  //   sel()
  // }
  value = value
  sessionStorage.setItem("value",value);
  // document.getElementById("result").innerHTML
  //         = "Gender: "+ele[i].value; 


}

function dpSel(){
  var sel = document.getElementById('inputState');


var opt = sel.options[sel.selectedIndex];
var option= opt.value ;


Option = option
       sessionStorage.setItem("Option",Option);
}