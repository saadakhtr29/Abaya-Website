// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByid("navbar").style.padding = "30px 10px";
  } else {
    document.getElementsByid("navbar").style.padding = "80px 10px";
  }
}

function myFunction(x) {
  x.classList.toggle("change");
}

// Function to start the countdown
function startCountdown() {
  // Set the initial target date for the countdown
  var countDownDate = new Date("May 13, 2024 23:59:59").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // If the countdown has expired
    if (distance <= 0) {
      // Reset the countdown to a new target date (e.g., 1 hour from now)
      countDownDate = new Date(now + 3600000).getTime(); // 3600000 milliseconds = 1 hour
    }

    // Time calculations for hours, minutes, and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Construct the countdown text
    var countdownText = "Offer Ends in: " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // Add span with style for the text "end" to be in red color
    countdownText = countdownText.replace("Ends", "<span style='color: red;'>Ends</span>");


    // Output the countdown result
    document.getElementById("offer-timer").innerHTML = countdownText;

  }, 1000); // Update every 1 second
}

// Start the countdown
startCountdown();

