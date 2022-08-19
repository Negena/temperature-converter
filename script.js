$(function(){
  //eventlistener
  $("#input").on("input", convert);
  $("#input").on("change", convert);
  $(".convertWhat").on("change", convert)

  $("#input").attr("placeholder", "celsius")

  function convert(){
    let selection = $(".convertWhat :selected").text().toLowerCase();
    let input = $('#input').val()

    //if input is empty string
    $("#input").attr("placeholder", selection);

    if ($('#input').val() == Number || $("#input").val() == "")  {
     $("#num").val(" ")
    }else {

     //if option selected is celsius
     if (selection  === 'celsius') {
      
      const calcFar = parseFloat(( input * 9/5 ) + 32)
      $("#input").attr("placeholder", "celsius")
      $("#num").val(calcFar+"℉")
    }

     //if option selected is fahrenheit
     if (selection === "fahrenheit") {
      const calcCel = parseFloat((input - 32) / 1.8)
      $("#input").attr("placeholder", "fahrenheit")
      $("#num").val(calcCel+'℃')
    }
        
  }

  }
})
