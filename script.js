$(function(){
  $("#input").on("input", convert);
  $("#input").on("change", convert);
  $(".convertWhat").on("change", convert)

  function convert(){
    let selection = $(".convertWhat :selected").text().toLowerCase();
    let input = $('#input').val()
    $("#input").attr("placeholder", selection);
    if ($('#input').val() === " " ){
      $("#num").val("no input")
    }
    if (selection  === 'celsius') {
      const calcFar = parseFloat(( input * 9/5 ) + 32)
      $("#num").val(calcFar+"℉")
    }
    if (selection === "fahrenheit") {
      const calcCel = parseFloat((input - 32) / 1.8)
      $("#num").val(calcCel+'℃')
    }
  }
})
