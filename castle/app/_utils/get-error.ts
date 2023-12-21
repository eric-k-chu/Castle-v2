export function getError(error: unknown): Error {
  return error instanceof Error
    ? error
    : new Error("An unknown error has occured.");
}
