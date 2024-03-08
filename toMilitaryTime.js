function toMilitaryTime(time) {
  // Split the input string by colon and space to separate hours, minutes, and AM/PM
  let [hourMinute, period] = time.split(' ');
  let [hour, minute] = hourMinute.split(':').map(num => parseInt(num, 10));

  // Convert hours in PM to military time, except for 12 PM
  if (period.toUpperCase() === 'PM' && hour < 12) {
    hour += 12;
  }

  // Convert 12 AM to 00 hours for military time
  if (period.toUpperCase() === 'AM' && hour === 12) {
    hour = 0;
  }

  // Format the hour and minute to ensure they are always two digits.
  let formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
  let formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;

  // Return the time in military format.
  return `${formattedHour}:${formattedMinute}`;
}

// Example usage:
console.log(toMilitaryTime("9:30 AM")); // Output: 09:30
console.log(toMilitaryTime("3:05 PM")); // Output: 15:05
console.log(toMilitaryTime("12:00 PM")); // Output: 12:00
console.log(toMilitaryTime("12:00 AM")); // Output: 00:00
