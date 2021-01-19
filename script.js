$(function(){
  $('#start_stop').click(function(){

    if($(this).text() == 'START'){
      $(this).text('STOP');
      $(this).removeClass('btn-primary');
      $(this).addClass('btn-danger');
    }else{
      $(this).text('START');
      $(this).removeClass('btn-danger');
      $(this).addClass('btn-primary');
    }

  })
})
