(function($) {

  $.fn.formate = function(opts) {
    opts = opts || {};
    opts.method = opts.method || this.getAttribute('method') || "GET";
    opts.url = opts.url || this.getAttribute('action')  || window.location;

    $(this).submit(handleDownload);
  };

  function handleDownload(e) {
    e.preventDefault();
    var data = $(this).serialize();

    $.ajax({

    }, data)
    .success()
    .fail();
  };

})( jQuery );