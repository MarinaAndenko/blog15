jQuery(function($) 
{
 	$(document).on('ajax:success', 'form', function(e, data, status, xhr) {
    if ('post' in data) {
      console.log(data.post);
      $("#post-list").prepend(data.post);
      $("#post-name").val("");
      $("#post-text").val("");
    }
    if ('errors' in data) {
      $("#error").append(data.errors);
    }
  });
});
