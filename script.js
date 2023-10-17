  // Set the countdown date and time
  const countdownDate = new Date("Oct 31, 2023 00:00:00").getTime();

  // Update the countdown every 1 second
  const countdownTimer = setInterval(function () {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // If the countdown is over, display a message
      if (distance < 0) {
          clearInterval(countdownTimer);
          document.getElementById("timer").innerHTML = "Sale Ended";
      }
  }, 1000);





 