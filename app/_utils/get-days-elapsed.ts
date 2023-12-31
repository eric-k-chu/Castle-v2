export function getDaysElapsed(endTime: EpochTimeStamp): string {
  const time = new Date(endTime * 1000);
  const now = new Date();

  const elapsedDays = now.getDate() - time.getDate();
  if (elapsedDays > 0) return `${elapsedDays}d ago`;

  const elapsedHours = now.getHours() - time.getHours();
  if (elapsedHours > 0) return `${elapsedHours}h ago`;

  const elapsedMinutes = now.getMinutes() - time.getMinutes();
  if (elapsedMinutes > 0) return `${elapsedMinutes}m ago`;

  return `${now.getSeconds() - time.getSeconds()}s ago`;
}
