export function getDaysElapsed(endTime: EpochTimeStamp): string {
  const time = new Date(endTime * 1000);
  const now = new Date();

  const elapsedYears = now.getFullYear() - time.getFullYear();
  if (elapsedYears > 0) return `${elapsedYears}y ago`;

  const elapsedMonths = now.getMonth() - time.getMonth();
  if (elapsedMonths > 0) return `${elapsedMonths}mo ago`;

  const elapsedDays = now.getDate() - time.getDate();
  if (elapsedDays > 0) return `${elapsedDays}d ago`;

  const elapsedHours = now.getHours() - time.getHours();
  if (elapsedHours > 0) return `${elapsedHours}h ago`;

  const elapsedMinutes = now.getMinutes() - time.getMinutes();
  if (elapsedMinutes > 0) return `${elapsedMinutes}m ago`;

  return `${now.getSeconds() - time.getSeconds()}s ago`;
}
