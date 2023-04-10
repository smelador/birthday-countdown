function calculateTimeDifference(targetDate) {
  const now = new Date();
  const timeDifference = targetDate - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

function startCountdown(targetDate) {
  const countdownElement = document.getElementById('countdown');

  function updateCountdown() {
    countdownElement.textContent = calculateTimeDifference(targetDate);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// Replace the date with your birthday (format: YYYY, MM, DD)
const myBirthday = new Date(2023, 11, 25);
startCountdown(myBirthday);