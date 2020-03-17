//                       Hours section                          //

function checkhour(val){
    var hourtextbox = document.getElementById('hour');
    $('#hours').hide(100);
    $('#hoursrange').hide(100);
    // $("#hour").prop("readonly",false);
    $("#hoursoption").prop("selected",true);
    $("#hoursrangeoption").prop("selected",true);
  
    hourtextbox.value='';
    if(val=='all')
    {
        hourtextbox.value="0-23";
        // $("#hour").prop("readonly",true);
       
    }
   else if(val=='range')
    {
      $('#hours').show(100);
        // $("#hour").prop("readonly",true);
        $('#hoursrange').show(100);
        $('#hours #hoursoption').text("From range");
        $('#hoursrange #hoursrangeoption').text("To range");
    }
    else if(val=='selected')
    {
      $('#hours').show(100);
      // $("#hour").prop("readonly",true);
        $('#hours #hoursoption').text("Select your hour");

    }
    else{
      $('#hours').show(100);
      // $("#hour").prop("readonly",true);
      $('#hours #hoursoption').text("Select your Interval");
    }
   }

   //                       Minutes section                          //

   function checkminute(val){
    var minutetextbox = document.getElementById('minute');
    $('#minutes').hide(100);
    $('#minutesrange').hide(100);
    // $("#minute").prop("readonly",false);
    $("#minutesoption").prop("selected",true);
    $("#minutesrangeoption").prop("selected",true);

    minutetextbox.value='';
    if(val=='all')
    {
        minutetextbox.value="0-59";
        // $("#minute").prop("readonly",true);
        $('#minutes').hide(100);
    }
   else if(val=='range')
    {
      $('#minutes').show(100);
        // $("#minute").prop("readonly",true);
        $('#minutesrange').show(100);
        $('#minutes #minutesoption').text("From range");
        $('#minutesrange #minutesrangeoption').text("To range");
    }
    else if(val=='selected')
    {
      $('#minutes').show(100);
      // $("#minute").prop("readonly",true);
        $('#minutes #minutesoption').text("Select your minute");

    }
    else{
      $('#minutes').show(100);
      // $("#minute").prop("readonly",true);
      $('#minutes #minutesoption').text("Select your Interval");
    }
   }


 //                       day of month section                          //

function checkdayofmonth(val){
    var dayofmonthtextbox = document.getElementById('dayofmonth');
    // $("#dayofmonth").attr("disabled", false);
    var dayofweektextbox = document.getElementById('dayofweek');
     dayofweektextbox.value="";
     $("#dayofweek").css('background', "#808080");
  $("#dayofmonth").css('background',"#FFFFFF");
    //  $("#dayofweek").attr("disabled", "disabled");
    $('#daysofmonth').hide(100);
    $('#daysofmonthrange').hide(100);
    // $("#dayofmonth").prop("readonly",false);
    $("#daysofmonthoption").prop("selected",true);
    $("#daysofmonthrangeoption").prop("selected",true);

    dayofmonthtextbox.value='';
    if(val=='all')
    {
      dayofmonthtextbox.value="1-31";
        // $("#dayofmonth").prop("readonly",true);
        $('#daysofmonth').hide(100);
    }
   else if(val=='range')
    {
      $('#daysofmonth').show(100);
        // $("#dayofmonth").prop("readonly",true);
        $('#daysofmonthrange').show(100);
        $('#daysofmonth #daysofmonthoption').text("From range");
        $('#daysofmonthrange #daysofmonthrangeoption').text("To range");
    }
    else if(val=='selected')
    {
      $('#daysofmonth').show(100);
      // $("#dayofmonth").prop("readonly",true);
        $('#daysofmonth #daysofmonthoption').text("Select your Day of month");

    }
    else{
      $('#daysofmonth').show(100);
      // $("#dayofmonth").prop("readonly",true);
      $('#daysofmonth #daysofmonthoption').text("Select your Interval");
    }
   }


//                       Months section                          //

function checkmonth(val){
  var monthtextbox = document.getElementById('month');
  var monthdropdown = document.getElementById('months');
  $('#months').hide(100);
  $('#monthsrange').hide(100);
  $('#monthsinterval').hide(100);
  // $("#month").prop("readonly",false);
  $("#monthsoption").prop("selected",true);
  $("#monthsrangeoption").prop("selected",true);
  $("#monthsinterval #monthsoption").prop("selected",true);

  monthtextbox.value='';
  if(val=='all')
  {
      monthtextbox.value="JAN-DEC";
      // $("#month").prop("readonly",true);
      $('#months').hide(100);
  }
 else if(val=='range')
  {
    $('#months').show(100);
      // $("#month").prop("readonly",true);
      $('#monthsrange').show(100);
      $('#months #monthsoption').text("From range");
      $('#monthsrange #monthsrangeoption').text("To range");
  }
  else if(val=='selected')
  {
    $('#months').show(100);
    // $("#month").prop("readonly",true);
      $('#months #monthsoption').text("Select your month");

  }
  else{
    $('#monthsinterval').show(100);
    $('#months').hide(100);
    // $("#month").prop("readonly",true);
    $('#monthsinterval #monthsoption').text("Select your Interval");
  }
 }

//                       day of week section                          //

function checkdayofweek(val){
  var dayofweektextbox = document.getElementById('dayofweek');
  // $("#dayofweek").attr("disabled", false);
  $("#dayofmonth").css('background', "#808080");
  $("#dayofweek").css('background',"#FFFFFF");
  document.getElementsByName('dayofmonth').checked = false;
  var dayofmonthtextbox = document.getElementById('dayofmonth');
   dayofmonthtextbox.value="";
  //  $("#dayofmonth").attr("disabled", "disabled");
  $('#daysofweek').hide(100);
  $('#daysofweekrange').hide(100);
  $('#daysofweekinterval').hide(100);
  // $("#dayofweek").prop("readonly",false);
  $("#daysofweekoption").prop("selected",true);
  $("#daysofweekrangeoption").prop("selected",true);
  $("#daysofweekinterval #daysofweekoption").prop("selected",true);


  dayofweektextbox.value='';
  if(val=='all')
  {
    dayofweektextbox.value="SUN-SAT";
      // $("#dayofweek").prop("readonly",true);
      $('#daysofweek').hide(100);
  }
 else if(val=='range')
  {
    $('#daysofweek').show(100);
      // $("#dayofweek").prop("readonly",true);
      $('#daysofweekrange').show(100);
      $('#daysofweek #daysofweekoption').text("From range");
      $('#daysofweekrange #daysofweekrangeoption').text("To range");
  }
  else if(val=='selected')
  {
    $('#daysofweek').show(100);
    // $("#dayofweek").prop("readonly",true);
      $('#daysofweek #daysofweekoption').text("Select your Day of week");

  }
  else{
    $('#daysofweekinterval').show(100);
    $('#daysofweek').hide(100);
    // $("#dayofweek").prop("readonly",true);
    $('#daysofweekinterval #daysofweekoption').text("Select your Interval");
  }
 }


//                       Year section                          //

function checkyear(val){
  var yeartextbox = document.getElementById('year');
  $('#years').hide(100);
  $('#yearsrange').hide(100);
  $('#yearsinterval').hide(100);
  // $("#year").prop("readonly",false);
  $("#yearsoption").prop("selected",true);
  $("#yearsrangeoption").prop("selected",true);
  $("#yearsinterval #yearsoption").prop("selected",true);

  yeartextbox.value='';
  if(val=='all')
  {
      yeartextbox.value="2020-2030";
      $("#year").prop("readonly",true);
      $('#years').hide(100);
  }
 else if(val=='range')
  {
    $('#years').show(100);
      // $("#year").prop("readonly",true);
      $('#yearsrange').show(100);
      $('#years #yearsoption').text("From range");
      $('#yearsrange #yearsrangeoption').text("To range");
  }
  else if(val=='selected')
  {
    $('#years').show(100);
    // $("#year").prop("readonly",true);
      $('#years #yearsoption').text("Select your year");

  }
  else{
    $('#yearsinterval').show(100);
    $('#years').hide(100);
    // $("#year").prop("readonly",true);
    $('#yearsinterval #yearsoption').text("Select your Interval");
  }
 }




  $(document).ready(function()
  {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == XMLHttpRequest.DONE) {
        console.log(request.responseText);
        var response=request.responseText;
         var re = JSON.parse(response);   
         var result=JSON.parse(re);
         console.log(result);
         console.log(result.instances);
         var res = result.instances;
         for (index = 0; index < res.length; index++) {
           var select=document.getElementById("instance");
           var option=document.createElement("option");
           option.text=res[index];
           option.value=res[index];
           select.add(option);
      }
    

      }
  }
    request.open('GET','https://bi10j53se4.execute-api.us-east-2.amazonaws.com/prod/getinstances',true);
    request.send(null);



    $('#hours').hide(100);

    $("#hour").prop("readonly",true);
    $("#minute").prop("readonly",true);
    $("#dayofmonth").prop("readonly",true);
    $("#dayofweek").prop("readonly",true);
    $("#month").prop("readonly",true);
    $("#year").prop("readonly",true);
    

      var selectedoptionhour1="";
      var selectedoptionhour2="";
      var selectedoptionmin1="";
      var selectedoptionmin2="";
      var selectedoptiondayofmonth1="";
      var selectedoptiondayofmonth2="";
      var selectedoptionmonth1="";
      var selectedoptionmonth2="";
      var selectedoptiondayofweek1="";
      var selectedoptiondayofweek2="";
      var selectedoptionyear2="";


      //                       Hours section                          //

      $('#hours').change(function()
      {
        
        var radioValue = $("input[name='hour']:checked").val();
        selectedoptionhour1=$('#hours option:selected').val();
        if(radioValue=='range')
        {
        hourrangeval(selectedoptionhour1,selectedoptionhour2);
        }
        else if(radioValue=='selected')
        {
            selectedvalhour(selectedoptionhour1);
            selectedoptionhour1="";
        }
        else 
        {
          Intervalhour(selectedoptionhour1);
          selectedoptionhour1="";
        }
      })
      $('#hoursrange').change(function()
      {
        var radioValue = $("input[name='hour']:checked").val();
        selectedoptionhour2=$('#hoursrange option:selected').val();
         hourrangeval(selectedoptionhour1,selectedoptionhour2);   
      })
      function hourrangeval(val1,val2)
      {
        var hourtextbox = document.getElementById('hour');
          if(val1!=""&& val2!="")
          {
        hourtextbox.value=val1+'-'+val2;
        return;
          }
          if(val1!=""&& val2=="")
          {
            hourtextbox.value=val1;
            return;
          }
          hourtextbox.value=val2;
      }
      function selectedvalhour(val)
      {
        var res=($("#hour").val());
        var arr=res.split(',');
          if (arr.includes( val)) {
          alert('Value exist');
          return;
          }
        var hourtextbox = document.getElementById('hour');
        if(($("#hour").val() == ""))
        {
          hourtextbox.value=val;
        }
        else{
          hourtextbox.value+=','+val;
        }  
      
      }
      function Intervalhour(val)
      {
        var hourtextbox = document.getElementById('hour');
        hourtextbox.value=val;
      }

         //                       Minutes section                          //

         $('#minutes').change(function()
         {
           var radioValue = $("input[name='minute']:checked").val();
           selectedoptionmin1=$('#minutes option:selected').val();
           if(radioValue=='range')
           {
           minuterangeval(selectedoptionmin1,selectedoptionmin2);
           }
           else if(radioValue=='selected')
           {
               selectedvalminute(selectedoptionmin1);
               selectedoptionmin1="";
           }
           else
           {
             Intervalminute(selectedoptionmin1);
             selectedoptionmin1="";
           }
         })
         $('#minutesrange').change(function()
         {
           var radioValue = $("input[name='minute']:checked").val();
           selectedoptionmin2=$('#minutesrange option:selected').val();
            minuterangeval(selectedoptionmin1,selectedoptionmin2);   
         })
         function minuterangeval(val1,val2)
         {
           var minutetextbox = document.getElementById('minute');
             if(val1!=""&& val2!="")
             {
           minutetextbox.value=val1+'-'+val2;
           return;
             }
             if(val1!=""&& val2=="")
             {
               minutetextbox.value=val1;
               return;
             }
             minutetextbox.value=val2;
         }
         function selectedvalminute(val)
         {
           var res=($("#minute").val());
           var arr=res.split(',');
             if (arr.includes( val)) {
             alert('Value exist');
             return;
             }
           var minutetextbox = document.getElementById('minute');
           if(($("#minute").val() == ""))
           {
             minutetextbox.value=val;
           }
           else{
             minutetextbox.value+=','+val;
           }  
         
         }
         function Intervalminute(val)
         {
           var minutetextbox = document.getElementById('minute');
           minutetextbox.value=val;
         }

           //                       Day of month section                          //

           $('#daysofmonth').change(function()
           {
             var radioValue = $("input[name='dayofmonth']:checked").val();
             selectedoptiondayofmonth1=$('#daysofmonth option:selected').val();
             if(radioValue=='range')
             {
             dayofmonthrangeval(selectedoptiondayofmonth1,selectedoptiondayofmonth2);
             }
             else if(radioValue=='selected')
             {
                 selectedvaldayofmonth(selectedoptiondayofmonth1);
                 selectedoptiondayofmonth1="";
             }
             else
             {
               Intervaldayofmonth(selectedoptiondayofmonth1);
               selectedoptiondayofmonth1="";
             }
           })
           $('#daysofmonthrange').change(function()
           {
             var radioValue = $("input[name='dayofmonth']:checked").val();
             selectedoptiondayofmonth2=$('#daysofmonthrange option:selected').val();
              dayofmonthrangeval(selectedoptiondayofmonth1,selectedoptiondayofmonth2);   
           })
           function dayofmonthrangeval(val1,val2)
           {
             var dayofmonthtextbox = document.getElementById('dayofmonth');
               if(val1!=""&& val2!="")
               {
                dayofmonthtextbox.value=val1+'-'+val2;
             return;
               }
               if(val1!=""&& val2=="")
               {
                dayofmonthtextbox.value=val1;
                 return;
               }
               dayofmonthtextbox.value=val2;
           }
           function selectedvaldayofmonth(val)
           {
             var res=($("#dayofmonth").val());
             var arr=res.split(',');
               if (arr.includes( val)) {
               alert('Value exist');
               return;
               }
             var dayofmonthtextbox = document.getElementById('dayofmonth');
             if(($("#dayofmonth").val() == ""))
             {
              dayofmonthtextbox.value=val;
             }
             else{
              dayofmonthtextbox.value+=','+val;
             }  
           
           }
           function Intervaldayofmonth(val)
           {
             var dayofmonthtextbox = document.getElementById('dayofmonth');
             dayofmonthtextbox.value=val;
           }

         //                       Months section                          //

         $('#months').change(function()
         {
           var radioValue = $("input[name='month']:checked").val();
           selectedoptionmonth1=$('#months option:selected').val();
           if(radioValue=='range')
           {
           monthrangeval(selectedoptionmonth1,selectedoptionmonth2);
           }
           else if(radioValue=='selected')
           {
               selectedvalmonth(selectedoptionmonth1);
               selectedoptionmonth1="";
           }
           else
           {
             Intervalmonth(selectedoptionmonth1);
             selectedoptionmonth1="";
           }
         })
         $('#monthsrange').change(function()
         {
           var radioValue = $("input[name='month']:checked").val();
           selectedoptionmonth2=$('#monthsrange option:selected').val();
            monthrangeval(selectedoptionmonth1,selectedoptionmonth2);   
         })
         function monthrangeval(val1,val2)
         {
           var monthtextbox = document.getElementById('month');
             if(val1!=""&& val2!="")
             {
           monthtextbox.value=val1+'-'+val2;
           return;
             }
             if(val1!=""&& val2=="")
             {
               monthtextbox.value=val1;
               return;
             }
             monthtextbox.value=val2;
         }
         function selectedvalmonth(val)
         {
           var res=($("#month").val());
           var arr=res.split(',');
             if (arr.includes( val)) {
             alert('Value exist');
             return;
             }
           var monthtextbox = document.getElementById('month');
           if(($("#month").val() == ""))
           {
             monthtextbox.value=val;
           }
           else{
             monthtextbox.value+=','+val;
           }  
         
         }
         function Intervalmonth(val)
         {
           var monthtextbox = document.getElementById('month');
           monthtextbox.value=val;
         }

         $('#monthsinterval').change(function()
         {
          var selectedoptionmonthinterval=$('#monthsinterval option:selected').val();
         
           var monthtextbox = document.getElementById('month');
           monthtextbox.value=selectedoptionmonthinterval;
         })


           //                       Day of week section                          //

           $('#daysofweek').change(function()
           {
             var radioValue = $("input[name='dayofweek']:checked").val();
             selectedoptiondayofweek1=$('#daysofweek option:selected').val();
             if(radioValue=='range')
             {
             dayofweekrangeval(selectedoptiondayofweek1,selectedoptiondayofweek2);
             }
             else if(radioValue=='selected')
             {
                 selectedvaldayofweek(selectedoptiondayofweek1);
                 selectedoptiondayofweek1="";
             }
             else
             {
               Intervaldayofweek(selectedoptiondayofweek1);
               selectedoptiondayofweek1="";
             }
           })
           $('#daysofweekrange').change(function()
           {
             var radioValue = $("input[name='dayofweek']:checked").val();
             selectedoptiondayofweek2=$('#daysofweekrange option:selected').val();
              dayofweekrangeval(selectedoptiondayofweek1,selectedoptiondayofweek2);   
           })
           function dayofweekrangeval(val1,val2)
           {
             var dayofweektextbox = document.getElementById('dayofweek');
               if(val1!=""&& val2!="")
               {
                dayofweektextbox.value=val1+'-'+val2;
             return;
               }
               if(val1!=""&& val2=="")
               {
                dayofweektextbox.value=val1;
                 return;
               }
               dayofweektextbox.value=val2;
           }
           function selectedvaldayofweek(val)
           {
             var res=($("#dayofweek").val());
             var arr=res.split(',');
               if (arr.includes( val)) {
               alert('Value exist');
               return;
               }
             var dayofweektextbox = document.getElementById('dayofweek');
             if(($("#dayofweek").val() == ""))
             {
              dayofweektextbox.value=val;
             }
             else{
              dayofweektextbox.value+=','+val;
             }  
           
           }
           function Intervaldayofweek(val)
           {
             var dayofweektextbox = document.getElementById('dayofweek');
             dayofweektextbox.value=val;
           }
           $('#daysofweekinterval').change(function()
           {
            var selectedoptiondayofweekinterval=$('#daysofweekinterval option:selected').val();
           
             var monthtextbox = document.getElementById('dayofweek');
             monthtextbox.value=selectedoptiondayofweekinterval;
           })

           //                       Years section                          //

         $('#years').change(function()
         {
           var radioValue = $("input[name='year']:checked").val();
           selectedoptionyear1=$('#years option:selected').val();
           if(radioValue=='range')
           {
           yearrangeval(selectedoptionyear1,selectedoptionyear2);
           }
           else if(radioValue=='selected')
           {
               selectedvalyear(selectedoptionyear1);
               selectedoptionyear1="";
           }
           else
           {
             Intervalyear(selectedoptionyear1);
             selectedoptionyear1="";
           }
         })
         $('#yearsrange').change(function()
         {
           var radioValue = $("input[name='year']:checked").val();
           selectedoptionyear2=$('#yearsrange option:selected').val();
            yearrangeval(selectedoptionyear1,selectedoptionyear2);   
         })
         function yearrangeval(val1,val2)
         {
           var yeartextbox = document.getElementById('year');
             if(val1!=""&& val2!="")
             {
           yeartextbox.value=val1+'-'+val2;
           return;
             }
             if(val1!=""&& val2=="")
             {
               yeartextbox.value=val1;
               return;
             }
             yeartextbox.value=val2;
         }
         function selectedvalyear(val)
         {
           var res=($("#year").val());
           var arr=res.split(',');
             if (arr.includes( val)) {
             alert('Value exist');
             return;
             }
           var yeartextbox = document.getElementById('year');
           if(($("#year").val() == ""))
           {
            yeartextbox.value=val;
           }
           else{
            yeartextbox.value+=','+val;
           }  
         
         }
         function Intervalyear(val)
         {
           var yeartextbox = document.getElementById('year');
           yeartextbox.value=val;
         }

         $('#yearsinterval').change(function()
         {
          var selectedoptionyearinterval=$('#yearsinterval option:selected').val();
         
           var yeartextbox = document.getElementById('year');
           yeartextbox.value=selectedoptionyearinterval;
         })


         var hourtextbox="";
         var minutetextbox="";
         var dayofmonthtextbox="";
         var monthtextbox="";
         var dayofweektextbox="";
         var yeartextbox="";

         function update()
         {
          if($("#hour").val()!="")
{
           if($("input[name='hour']:checked") && $('#hour').val()!="")
           {
          var radioValue = $("input[name='hour']:checked").val();
         hourtextbox=$('#hour').val();
          if(radioValue=='all')
          {
            hourtextbox="On Every hour ";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          
          }
          else if(radioValue=="range")
          {
            hourtextbox="Every "+hourtextbox+" range hour";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
          else if(radioValue=='selected')
          {
            hourtextbox=" On Every "+"hour: "+hourtextbox;
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);

          }
          else if(radioValue=='interval'){
            hourtextbox=" On Interval of every "+hourtextbox+" hour";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
        }
      }
        if($("#minute").val()!="")
{
        if($("input[name='minute']:checked"))
        {
          var radioValue = $("input[name='minute']:checked").val();
         minutetextbox=$('#minute').val();
          if(radioValue=='all')
          {
            minutetextbox="On Every Minute ";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          
          }
          else if(radioValue=="range")
          {
            minutetextbox="Every "+minutetextbox+"  range Minute";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
          else if(radioValue=='selected')
          {
            minutetextbox=" On Every "+" Minute:"+minutetextbox ;
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);

          }
          else if(radioValue=='interval'){
            minutetextbox=" On Interval of every "+minutetextbox+" minute";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
        }
        }
        if($("#dayofmonth").val()!="")
{
        if($("input[name='dayofmonth']:checked"))
        {
          dayofweektextbox="";
          var radioValue = $("input[name='dayofmonth']:checked").val();
         dayofmonthtextbox=$('#dayofmonth').val();
          if(radioValue=='all')
          {
            dayofmonthtextbox="On Every Day ";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          
          }
          else if(radioValue=="range")
          {
            dayofmonthtextbox="Every "+dayofmonthtextbox+"  range days";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
          else if(radioValue=='selected')
          {
            dayofmonthtextbox=" On Every " +" day:"+dayofmonthtextbox;
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);

          }
          else if(radioValue=='interval'){
            dayofmonthtextbox=" On Interval of every "+dayofmonthtextbox+" days";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
        }
        }
        if($("#month").val()!="")
{
        if($("input[name='month']:checked"))
        {
          var radioValue = $("input[name='month']:checked").val();
         monthtextbox=$('#month').val();
          if(radioValue=='all')
          {
            monthtextbox="On Every month ";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          
          }
          else if(radioValue=="range")
          {
            monthtextbox="Every "+monthtextbox+"  range months";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
          else if(radioValue=='selected')
          {
            monthtextbox=" On Every "+" month:"+monthtextbox ;
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);

          }
          else if(radioValue=='interval'){
            monthtextbox=" On Interval of every "+monthtextbox+" months";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }

        }
      }
        if($("#dayofweek").val()!="")
{
        if($("input[name='dayofweek']:checked"))
        {
          dayofmonthtextbox="";
          var radioValue = $("input[name='dayofweek']:checked").val();
         dayofweektextbox=$('#dayofweek').val();
          if(radioValue=='all')
          {
            dayofweektextbox="On Every week ";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          
          }
          else if(radioValue=="range")
          {
            dayofweektextbox="Every "+dayofweektextbox+"  range weeks";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
          else if(radioValue=='selected')
          {
            dayofweektextbox=" On Every "+" week:"+dayofweektextbox ;
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);

          }
          else if(radioValue=='interval'){
            dayofweektextbox=" On Interval of every "+dayofweektextbox+" weeks";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
        }
        }
        if($("#year").val()!="")
        {
        if($("input[name='year']:checked"))
        {
          var radioValue = $("input[name='year']:checked").val();
         yeartextbox=$('#year').val();
          if(radioValue=='all')
          {
            yeartextbox="On Every year ";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          
          }
          else if(radioValue=="range")
          {
            yeartextbox="Every "+yeartextbox+"  range years";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }
          else if(radioValue=='selected')
          {
            yeartextbox=" On Every "+" year:"+yeartextbox ;
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);

          }
          else if(radioValue=='interval'){
            dayofmonthtextbox=" On Interval of every "+dayofmonthtextbox+" years";
            checkmyschedule(hourtextbox,minutetextbox,dayofmonthtextbox,monthtextbox,dayofweektextbox,yeartextbox);
          }

        }
      }
         };
         function checkmyschedule(val1,val2,val3,val4,val5,val6)
         {
          $('#textarea').val(val1+" "+val2+" "+val3+" "+val4+" "+val5+" "+val6);
         }



         $("#set").click(function()        {
          var hour="";
         var minute="";
         var dayofmonth="";
         var month="";
         var dayofweek="";
         var year="";


         if($("input[name='hour']:checked") )
         {
        var radioValue = $("input[name='hour']:checked").val();
      
        if(radioValue=='all')
        {
          hour="*";
        
        }
        else if(radioValue=="range")
        {
          hour=$('#hour').val();
        }
        else if(radioValue=='selected')
        {
          hour=$('#hour').val();

        }
        else if(radioValue=='interval'){
          hour="1/"+$('#hour').val();
        }

        }
        if($('#hour').val()=="")
        {
          hour="*";
        }


        if($("input[name='minute']:checked") )
         {
        var radioValue = $("input[name='minute']:checked").val();
      
        if(radioValue=='all')
        {
          minute="*";
        
        }
        else if(radioValue=="range")
        {
          minute=$('#minute').val();
        }
        else if(radioValue=='selected')
        {
          minute=$('#minute').val();

        }
        else if(radioValue=='interval'){
          minute="1/"+$('#minute').val();
        }

        }
        if($('#minute').val()=="")
        {
          minute="*";
        }



        if($("input[name='dayofmonth']:checked"))
        {
       var radioValue = $("input[name='dayofmonth']:checked").val();
     
       if(radioValue=='all')
       {
        dayofmonth="*";
       
       }
       else if(radioValue=="range")
       {
        dayofmonth=$('#dayofmonth').val();
       }
       else if(radioValue=='selected')
       {
        dayofmonth=$('#dayofmonth').val();

       }
       else if(radioValue=='interval'){
        dayofmonth="1/"+$('#dayofmonth').val();
       }

       }
       if(($('#dayofmonth').val()==""))
       {
        dayofmonth="?";
       }



       if($("input[name='month']:checked") )
         {
        var radioValue = $("input[name='month']:checked").val();
      
        if(radioValue=='all')
        {
          month="*";
        
        }
        else if(radioValue=="range")
        {
          month=$('#month').val();
        }
        else if(radioValue=='selected')
        {
          month=$('#month').val();

        }
        else if(radioValue=='interval'){
          month="1/"+$('#month').val();
        }

        }
        if($('#month').val()=="")
        {
          month="*";
        }
        

        if($("input[name='dayofweek']:checked") )
        {
       var radioValue = $("input[name='dayofweek']:checked").val();
     
       if(radioValue=='all')
       {
        dayofweek="*";
       
       }
       else if(radioValue=="range")
       {
        dayofweek=$('#dayofweek').val();
       }
       else if(radioValue=='selected')
       {
        dayofweek=$('#dayofweek').val();

       }
       else if(radioValue=='interval'){
        dayofweek="1/"+$('#dayofweek').val();
       }

       }
       if(($('#dayofweek').val()==""))
       {
        dayofweek="?";
       }



       if($("input[name='year']:checked") )
       {
      var radioValue = $("input[name='year']:checked").val();
    
      if(radioValue=='all')
      {
        year="*";
      
      }
      else if(radioValue=="range")
      {
        year=$('#year').val();
      }
      else if(radioValue=='selected')
      {
        year=$('#year').val();

      }
      else if(radioValue=='interval'){
        year="1/"+$('#year').val();
      }

      }
      if($('#year').val()=="")
      {
        year="*";
      }
      


      if(($('#dayofweek').val()=="")&&($('#dayofmonth').val()==""))
      {
        dayofweek="?";
        dayofmonth="*";
      }

      var instance=$('#instance option:selected').val();
      var state = $("input[name='onoff']:checked").val();
      var rulename=$("#rulename").val();

      if(rulename=="")
      {
        $(".errormsgrule").show();
        setTimeout(function() { 
          $(".errormsgrule").hide();    
        }, 2000);
      }
       if(typeof state=='undefined')
      {
        $(".errormsgstate").show();
        setTimeout(function() { 
          $(".errormsgstate").hide();    
        }, 2000);
      }
      if(instance=="")
      {
        $(".errormsginstance").show();
        setTimeout(function() { 
          $(".errormsginstance").hide();    
        }, 2000);

      }
       if((rulename!="") && (typeof state!='undefined') && (instance!="")){
     var result="{"+"\"cron\":"+"\"cron("+minute+" "+hour+" "+dayofmonth+" "+month+" "+dayofweek+" "+year+")"+"\"" +","+ "\"instance\":"+"\""+instance+"\","+"\"state\":"+"\""+state+"\","+"\"rulename\":"+"\""+rulename+"\""+ "}"

     alert(result);
     var Http = new XMLHttpRequest();
    //  var url='https://cors-anywhere.herokuapp.com/https://3vvbalp667.execute-api.us-east-2.amazonaws.com';
    var url='https://wg0yiwwfq8.execute-api.us-east-2.amazonaws.com/prod/rule';

     
     Http.open("POST",url)
     Http.send(result);
     Http.onreadystatechange = function() {
if(Http.readyState==4)
{
  if(this.status==200 )
  {
  console.log(Http.responseText)
  $(".successmsg").show();
    
  setTimeout(function() { 
   location.reload();     
 }, 2000);
  }
  else
  {
    $(".errormsg").show();
    setTimeout(function() { 
      location.reload();     
    }, 2000);

  }
}    
     }


}
      })
         window.setInterval(function(){
          
          update();

        }, 5000);

      

  })