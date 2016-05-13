jQuery(function($) 
{ 
  //var currentUrl = "/posts";
  $(function () {
    $('.pagination a').click(function() {
      $.get(this.href, null, null, 'script');
      currentUrl = this.href;
      return false;
    });
    setInterval(function() {
      if (currentUrl == undefined) {
        var currentUrl = "/posts";
      } 
      alert(currentUrl);
      $.ajax({
        type: "GET",
        data: 'page',
        url: currentUrl
      });
    }, 1000);
  });
});