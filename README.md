# Castle-v2

A overhaul of Castle, a player search engine built with Chess.com's API.

# Display Player Information

Because of [Chess.com's rate limiting for parallel requests](https://www.chess.com/news/view/published-data-api#pubapi-general-rate-limits), encapsulating all fetch calls in a `Promise.all()` can cause a CORS error, which seems to be uncatchable without configuration.

If your HTML page relies on the first endpoint to succeed, you can split the first fetch call and put the subsequent calls in a `Promise.all()`.
