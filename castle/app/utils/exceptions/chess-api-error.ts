export class ChessApiError extends Error {
  constructor(
    public status: number,
    public key: string,
  ) {
    let message = "";
    switch (status) {
      case 404:
        message = `No search results for ${key}`;
        break;
      case 410:
        message = `The current URL is unavailable.`;
        break;
      case 429:
        message = `Too many requests have been made.`;
        break;
      default:
        message = "An unknown error has occured.";
    }
    super(message);
  }
}
