# Castle-v2

A overhaul of Castle, a player search engine built with Chess.com's API.

# Display Player Information

Because of [Chess.com's rate limiting for parallel requests](https://www.chess.com/news/view/published-data-api#pubapi-general-rate-limits), encapsulating all fetch calls in a `Promise.all()` can cause a CORS error if the provided key like `username` doesn't exist in their database. For these reasons, calls to their API must be done **sequentially**.
