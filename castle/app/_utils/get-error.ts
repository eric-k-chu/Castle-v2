export function getError(responseCode: number): string {
  switch (responseCode) {
    case 404:
      return "The data requested does not exist.";
    case 410:
      return "The data requested is unavailable at this URL.";
    case 429:
      return "Too many requests.";
    default:
      return "An unknown error has occured.";
  }
}
