export function getDateFromUtc(utcSeconds: number): {
  full: string;
  half: string;
} {
  const date = new Date(utcSeconds * 1000);
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
  return {
    full: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`,
    half: `${months[date.getMonth()]} ${date.getFullYear()}`,
  };
}
