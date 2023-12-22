# Castle-v2

A overhaul of Castle, a player search engine built with Chess.com's API.

# Search

Chess.com's public API does not have an endpoint for all their players. However, they do have an endpoint for their titled players and players by country.

In order to set up search suggestions without getting rate limited, all titled players pulled and cached initially. When the player searches for a player, it will filter out that list of titled players instead of calling their Chess.com's API.
