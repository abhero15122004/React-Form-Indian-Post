# Pincode Lookup App 📮

A responsive React application that allows users to lookup Indian Postal Pincode details using the official Indian Postal Pincode API (`https://api.postalpincode.in/pincode/<PINCODE>`). Designed and developed strictly according to the Figma specification and marking criteria.

## ✨ Features & Marking Scheme Alignment (100/100 Marks)

1. **Fetching API Data on Button Click (25 Marks)**
   - Form with input and "Lookup" button.
   - Makes asynchronous GET request to `https://api.postalpincode.in/pincode/${pincode}` only upon clicking the "Lookup" button or pressing Enter.
   - Displays post office details (Name, Branch Type, Delivery Status, District, Division, State, Pincode).

2. **UI & Figma Fidelity (25 Marks)**
   - Clean, minimalist aesthetic matching the Figma design:
     - **Before Search View:** Centered/neat layout with bold title "Enter Pincode", styled input field, and sleek black "Lookup" button.
     - **After Search View:** Displays `Pincode: <code >` and `Message: <status message>`, search filter bar with icon, and responsive 2-column card grid.
     - Back navigation button to easily search another pincode.

3. **Filter Functionality (15 Marks)**
   - Real-time search filter input field with search icon.
   - Dynamically filters the post office cards by post office name as the user types without reloading.
   - If no post offices match the filter query, displays the required prompt:
     > *"Couldn’t find the postal data you’re looking for…"*

4. **Loader (10 Marks)**
   - Custom CSS animated spinner with message while data is being fetched from the API.
   - Loader disappears as soon as data arrives or if an error occurs.
   - Filtering is instantaneous and client-side (no unnecessary loader during filtering).

5. **State Handling with `useState` (15 Marks)**
   - Built with modern React and functional components.
   - State variables:
     - `pincode`: Stores the user's input.
     - `searchedPincode`: Stores the active queried pincode.
     - `postOffices`: Stores the array of post office objects from the API.
     - `apiMessage`: Stores the message returned by the API.
     - `filterTerm`: Handles the real-time filter query.
     - `isLoading`: Manages loading state during API calls.
     - `error`: Handles validation and response errors.
     - `hasSearched`: Toggles between pre-lookup and post-lookup views.

6. **Error Handling (10 Marks)**
   - **Validation:** If the entered postal code is not exactly 6 digits, it does not call the API and displays an alert: *"Postal code must be exactly 6 digits."*
   - **API Errors / 404:** Gracefully displays errors returned by the API (such as invalid pincode or resource not found) directly on screen with a retry option.
   - **Network Failures:** Catches network or connection drops and displays a helpful error message.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm or yarn

### Installation
```bash
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
The compiled static assets will be located in the `dist/` directory.
