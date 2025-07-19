# Lords Of The Drinks 🍹 (React Native / Expo Front-End)

> **Lords Of The Drinks** is a **mobile front-end prototype (Bachelor’s university project)** for a drink ordering & venue management system. During the course it consumed a **C backend service** (not included in this repository) responsible for authentication, menu / recommendations, cart lifecycle, order submission and payment outcome. This repository contains *only the client*.

<p align="center">
  <img alt="License MIT" src="https://img.shields.io/badge/license-MIT-blue" />
  <img alt="Project Status" src="https://img.shields.io/badge/status-beta-orange" />
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/Klinker195/Lords-Of-The-Drinks" />
  <img alt="Code Size" src="https://img.shields.io/github/languages/code-size/Klinker195/Lords-Of-The-Drinks" />
</p>

---

## Table of Contents
1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Repository Structure](#repository-structure)
4. [Screens](#screens)
5. [UI Components](#ui-components)
6. [State Management](#state-management)
7. [Authentication & Secure Storage](#authentication--secure-storage)
8. [Backend API (C Service)](#backend-api-c-service)
9. [Installation](#installation)

---

## Overview
The app demonstrates an end-to-end mobile ordering flow: user registers / logs in, browses the venue and recommended drinks, adds items to a cart, reviews the order, completes checkout, and sees a confirmation / failure notification.

## Architecture
- **Frontend:** React Native + Expo (single bundle) using a native stack navigator.
- **State:** Lightweight global context (`DrinksContext`) for the drink list, recommendations and cart counts.
- **Assets:** Local images (drinks, status icons) and custom Red Hat Text fonts loaded at app start.
- **Networking:** Direct `fetch` calls defined in `utils/LOTD_Api.js` (no external HTTP client).
- **Persistence:** Secure token storage via Expo Secure Store wrapper (`utils/AsyncStorage.js`).
- **Backend:** External C REST API (not open-sourced here) returning JSON tokens / status codes.

## Repository Structure
```
.
├─ App.js
├─ AuthScreen.js
├─ HomeScreen.js
├─ VenueScreen.js
├─ OrderSummaryScreen.js
├─ CheckoutScreen.js
├─ NotificationScreen.js
├─ components/
│   ├─ LOTD_Buttons.js
│   ├─ LOTD_Containers.js
│   ├─ LOTD_Input.js
│   ├─ LOTD_Lines.js
├─ utils/
│   ├─ AsyncStorage.js        # Secure token storage helpers
│   ├─ LOTD_Api.js            # fetch wrappers for backend endpoints
│   ├─ DrinksContext.js       # Global context (drinks & cart)
├─ assets/                    # Images / icons / splash
├─ fonts/                     # RedHatText-*.ttf
├─ app.json                   # Expo configuration
├─ package.json
└─ LICENSE
```

### Key Files
| File | Role |
|------|------|
| `App.js` | Loads fonts, sets up navigation stack, provides context. |
| `AuthScreen.js` | Login & sign-up logic, regex validation, token persistence. |
| `HomeScreen.js` | Post-auth hub: navigation to venue & notifications, logout. |
| `VenueScreen.js` | Fetches venue info, drinks & recommended drinks, search & add to cart. |
| `OrderSummaryScreen.js` | Adjust quantities, compute totals, confirm order. |
| `CheckoutScreen.js` | Retrieve pending order & invoke payment endpoint. |
| `NotificationScreen.js` | Display success / error and redirect user. |
| `utils/DrinksContext.js` | Global drink & cart state functions. |
| `utils/AsyncStorage.js` | SecureStore wrapper (save/get/delete token). |
| `utils/LOTD_Api.js` | Central place for backend endpoint calls. |

## Screens
**AuthScreen**: Email/password forms, validation, token save on success.  
**HomeScreen**: Entry point after auth; shortcuts to venue and notification status.  
**VenueScreen**: Lists drinks & recommendations, local name filter, increment in-cart count.  
**OrderSummaryScreen**: Editable quantities, recomputed total, order submission.  
**CheckoutScreen**: Displays pending order & triggers payment request.  
**NotificationScreen**: Outcome status (success/failure) with next-step navigation.

## UI Components
Custom button variants (primary, secondary, floating, add, logout, profile), gradient containers, password input with show/hide toggle, dividers, quantity badges.

## State Management
`DrinksContext` holds arrays for drinks & recommended drinks plus a cart items map / counter. Functions update the cart and propagate totals to summary & checkout without prop drilling.

## Authentication & Secure Storage
Upon successful login or signup, backend returns a token persisted via secure storage. App bootstraps by checking a stored token to auto-navigate to Home. Logout deletes the token and resets navigation.

## Backend API (C Service)
Client expects the following POST JSON endpoints (abstracted behind `LOTD_Api.js`):
```
/login
/signup
/logout
/getvenue
/getvenuedrink
/getvenuerecdrink
/sendorder
/getorderdetails
/payorder
```
Each returns a JSON payload with either a `token`, data collections (drinks, recommendations, order details), or status indicators used to branch UI logic. The backend code is *out of scope* for this repository.

## Installation
Prerequisites: **Node.js ≥ 18**, npm (or yarn/pnpm), optionally the **Expo Go** app on a device or an Android/iOS emulator.

```bash
git clone https://github.com/Klinker195/Lords-Of-The-Drinks.git
cd Lords-Of-The-Drinks
npm install           # install dependencies
npm start             # start Metro (Expo)
# or platform helpers:
npm run android       # launch on Android device/emulator
npm run ios           # launch on iOS simulator (macOS required)
```

Scan the QR code printed by Expo to load the app on a physical device.

---

*Cheers & Happy Coding!* 🍸
