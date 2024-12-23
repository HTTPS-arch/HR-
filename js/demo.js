
$(document).ready(function() {
  // Array of counters and their target values
  var counters = [
      { id: '#counter1', target: 5000 },
      { id: '#counter2', target: 100 },
      { id: '#counter3', target: 14 },
      { id: '#counter4', target: 6 }
  ];

  // Find the slowest counter by calculating the time required for each counter to reach its target
  var maxDuration = Math.max(...counters.map(function(counter) {
      return counter.target; // Get the maximum target value (the slowest counter)
  }));

  // Loop through each counter
  counters.forEach(function(counter) {
      // Calculate the duration based on the target value for this counter
      var duration = (counter.target / maxDuration) * 2000; // Adjust the 2000 to your desired speed

      // Animate the counter's value as soon as the page is loaded
      $({ count: 0 }).animate({ count: counter.target }, {
          duration: duration,
          step: function () {
              $(counter.id).text(Math.floor(this.count));
          },
          complete: function () {
              $(counter.id).text(counter.target); // Ensure the counter shows the exact final value
          }
      });
  });
});




$(document).ready(function() {
    // jQuery function to handle "Read More" button click event
    $('.read-more-btn').click(function() {
      // Find the closest feature card to the clicked button
      var card = $(this).closest('.feature-card');
      
      // Toggle visibility of the additional content
      var additionalContent = card.find('.additional-content');
      
      // If the additional content is hidden, show it and change button text
      if (additionalContent.is(':hidden')) {
        additionalContent.slideDown();  // Show content with sliding effect
        $(this).text('Read Less');      // Change button text to 'Read Less'
      } else {
        additionalContent.slideUp();    // Hide content with sliding effect
        $(this).text('Read More');      // Change button text back to 'Read More'
      }
    });
  });

      // Back to top button
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

