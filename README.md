# Your Restaurant — Food Menu

A responsive restaurant menu and sample ordering workflow built with **HTML, CSS, and vanilla JavaScript only** (no frameworks or build tools).

## Features

- Responsive dark restaurant UI inspired by the supplied Figma screenshot.
- Loads the provided `food.json` from GitHub, with a built-in fallback menu if the request is unavailable.
- Menu search, add-to-cart, quantity controls, total calculation, and clear cart.
- Second order-status screen with a three-step progress indicator.
- Required Promise functions:
  - `TakeOrder()` — resolves after 2500 ms with three randomly selected burger servings and `order_status: true`, `paid: false`.
  - `orderPrep()` — resolves after 1500 ms with `order_status: true`, `paid: false`.
  - `payOrder()` — resolves after 1000 ms with `order_status: true`, `paid: true`.
  - `thankyouFnc()` — called only after successful payment and displays an on-screen thank-you dialog.
- Sequential `async/await` promise handling and error handling.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a browser.

For best results, use a local static server (optional):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a GitHub repository and push these files.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`, then save.
5. Wait for the Pages URL to appear.

## Notes

- Checkout and payment are simulated only. This project does not collect personal or payment details.
- The external menu JSON and food photos require an internet connection. A fallback menu keeps the site usable if the JSON request fails.
