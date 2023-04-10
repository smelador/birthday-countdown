// Set the date of your birthday
const birthday = new Date('April 30, 2000 00:00:00').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the difference between the two dates
  const difference = birthday - now;

  // Calculate the days, hours, minutes, and seconds left
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Display the countdown on the webpage
  document.querySelector('.countdown').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  // If the countdown is over, display a message
  if (difference < 0) {
    clearInterval(countdown);
    document.querySelector('.countdown').innerHTML = "Happy Birthday to Me!";
  }
}, 1000);
