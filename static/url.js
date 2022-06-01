
  //<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous">


<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
$(document).on('submit', '#post-form',function(e){
  e.preventDefault();
  $.ajax({
    type:'POST',
    url:'/create',
    data:{
      link:$('#link').val(),
      csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),

    },
    success:function(data){
      $('h2').html("localhost:8000/"+data)
    }
  });
});
