$(function () {
    $('#activator').click(function () {
      $('#box').animate({
        'top': '0px'
      }, 500);
    });
    $('#boxclose').click(function () {
      $('#box').animate({
        'top': '-700px'
      }, 500);
    });
  });
  $(document).ready(function () {
    addEventListener("load", function () {
      setTimeout(hideURLbar, 0);
    }, false);

    function hideURLbar() {
      window.scrollTo(0, 1);
    }
    //Hide (Collapse) the toggle containers on load
    $(".toggle_container").hide();
    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
    $(".trigger").click(function () {
      $(this).toggleClass("active").next().slideToggle("slow");
      return false; //Prevent the browser jump to the link anchor
    });
  });

(function ($){
    var $tiles = $('#tiles'),
        $handler = $('li', $tiles),
        $main = $('#main'),
        $window = $(window),
        $document = $(document),
        options = {
          autoResize: true, // This will auto-update the layout when the browser window is resized.
          container: $main, // Optional, used for some extra CSS styling
          offset: 20, // Optional, the distance between grid items
          itemWidth:280 // Optional, the width of a grid item
        };
    /**
     * Reinitializes the wookmark handler after all images have loaded
     */
    function applyLayout() {
      $tiles.imagesLoaded(function() {
        // Destroy the old handler
        if ($handler.wookmarkInstance) {
          $handler.wookmarkInstance.clear();
        }

        // Create a new layout handler.
        $handler = $('li', $tiles);
        $handler.wookmark(options);
      });
    }
    /**
     * When scrolled all the way to the bottom, add more tiles
     */
    // function onScroll() {
    //   // Check if we're within 100 pixels of the bottom edge of the broser window.
    //   var winHeight = window.innerHeight ? window.innerHeight : $window.height(), // iphone fix
    //       closeToBottom = ($window.scrollTop() + winHeight > $document.height() - 100);

    //   if (closeToBottom) {
    //     // Get the first then items from the grid, clone them, and add them to the bottom of the grid
    //     var $items = $('li', $tiles),
    //         $firstTen = $items.slice(0, 10);
    //     $tiles.append($firstTen.clone());

    //     applyLayout();
    //   }
    // };

    // Call the layout function for the first time
    applyLayout();

    // Capture scroll event.
    //$window.bind('scroll.wookmark', onScroll);
  })(jQuery);