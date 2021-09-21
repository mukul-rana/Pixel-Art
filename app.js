


$(document).ready(function(){
    var grid = "<tr>";
    for(var i=0;i<20;i++)
      grid += '<td></td>';
    grid += "</tr>";
    var basic="";
    for(var i=0;i<20;i++)
      basic += grid;
    $('#grid').html(basic);

    
  
    $('td').click(function(){
      
      if($(this).css('background-color')=='rgb(128, 0, 128)')
        $(this).css('background-color','rgba(0, 0, 0, 0)');
      else
        $(this).css('background-color','rgb(128, 0, 128)');
      
      
    });

    $('#grid').css('marginLeft','auto');
    $('#grid').css('marginRight','auto');
    

  $('#start').click(function(){
      newSize = $('#size').val();
      newSize = Math.min(newSize,75);
      $('td').css('height',newSize);
      $('td').css('width',newSize);
  });

})
