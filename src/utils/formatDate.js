export function formatDate(date) {
  // Define an array of month abbreviations
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract day, month, and year from the date
  const day = date?.getDate();
  const month = months[date?.getMonth()];
  const year = date?.getFullYear();

  // Format the date as DD-MMM-YYYY
  return `${day}-${month}-${year}`;
}
