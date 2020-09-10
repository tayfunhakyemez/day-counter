window.onload = function () {
  // DAY COUNTER LOOP
  const items = document.getElementsByClassName("townListItem");
  for (i = 0; i < items.length; i++) {
    const startingDate = new Date(items[i].dataset.date); // Starting Date
    now = new Date(); // Today's Date
    difference = new Date(now - startingDate); // Difference Between Two Dates
    day = Math.floor(difference / 1000 / 60 / 60 / 24); // Converting the Milliseconds Obtained to Days
    items[i].getElementsByClassName("increasingDay")[0].textContent = day;
  }
};
