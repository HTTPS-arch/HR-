
    $(document).ready(function() {
      // When any "Read More" button is clicked
      $(".read-more-btn").click(function() {
        // Find the next sibling with class "extra-content" and toggle visibility
        $(this).prev(".extra-content").slideToggle();

        // Change the button text to "Read Less" or "Read More"
        if ($(this).text() === "Read More") {
          $(this).text("Read Less");
        } else {
          $(this).text("Read More");
        }
      });
    });
