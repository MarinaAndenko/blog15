jQuery(function($) 
{
 	$(document).on('ajax:success', 'form', function(e, data, status, xhr) {
    if ('post' in data) {
      $("#post-list").prepend(data.post);
      $("#post-name").val("");
      $("#post-text").val("");
    }
  });
  $(document).on('ajax:error', 'form', function(e, data, status, error) {
    $("#post-list").prepend(data.post);
  });
});
