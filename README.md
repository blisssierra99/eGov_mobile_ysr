# eGov Mobile YSR

**eGovernance Mobile Application for Andhra Pradesh Government Schemes**

A React Native mobile application that enables citizens of Andhra Pradesh to discover, apply for, and track government welfare schemes (YSR schemes and others) directly from their smartphones.

---

## Features

- 📋 **Browse Schemes** – Explore government welfare schemes across 8 categories
- ✅ **Check Eligibility** – Instantly check if you qualify for a scheme
- 📱 **OTP Login** – Secure Aadhaar-linked mobile number authentication
- 📍 **Track Applications** – Monitor status of submitted applications
- 💰 **Payment Status** – View history of benefit payments received
- 📢 **Grievance Portal** – Submit and track complaints
- 🏢 **Mee Seva Locator** – Find nearest government service center
- 🔔 **Notifications** – Get alerts for new schemes and application updates

## Scheme Categories

| Category | Examples |
|---|---|
| 🌾 Agriculture | YSR Rythu Bharosa, Free Crop Insurance |
| 🏥 Health | YSR Aarogyasri |
| 📚 Education | Jagananna Amma Vodi, Vidya Deevena |
| 🏠 Housing | Pedalandariki Illu |
| 🛡️ Social Security | YSR Pension Kanuka |
| 👩 Women Empowerment | YSR Cheyutha, Kapu Nestham |
| 🐟 Fishermen | YSR Matsyakara Bharosa |
| 💼 Entrepreneurs | Jagananna Thodu |

## Tech Stack

- **Framework**: React Native 0.73
- **Navigation**: React Navigation 6 (Stack + Bottom Tabs)
- **Language**: JavaScript (ES2020+)
- **Platform**: Android & iOS

## Project Structure

```
eGov_mobile_ysr/
├── App.js                    # Root component
├── index.js                  # Entry point
├── src/
│   ├── constants/            # App-wide constants
│   │   ├── colors.js         # Color palette
│   │   ├── typography.js     # Font sizes & weights
│   │   ├── spacing.js        # Layout spacing
│   │   ├── routes.js         # Navigation route names
│   │   └── schemes.js        # Scheme data & categories
│   ├── navigation/           # Navigation setup
│   │   ├── AppNavigator.js   # Root navigator
│   │   ├── AuthNavigator.js  # Auth flow stack
│   │   └── MainNavigator.js  # Main tab navigator
│   ├── screens/              # App screens
│   │   ├── LoginScreen.js    # Mobile number login
│   │   ├── OtpVerifyScreen.js# OTP verification
│   │   ├── HomeScreen.js     # Dashboard
│   │   ├── SchemeListScreen.js # Browse schemes
│   │   ├── SchemeDetailsScreen.js # Scheme details
│   │   ├── ServicesScreen.js # Services portal
│   │   └── ProfileScreen.js  # User profile
│   ├── components/           # Reusable UI components
│   │   ├── SchemeCard.js     # Scheme summary card
│   │   └── CategoryCard.js   # Category selector card
│   ├── services/             # API integration
│   │   └── api.js            # HTTP service layer
│   └── utils/                # Utility functions
│       ├── validation.js     # Input validation
│       └── storage.js        # Local storage helpers
└── __tests__/                # Unit tests
    ├── validation.test.js
    └── schemes.test.js
```

## Getting Started

### Prerequisites

- Node.js >= 18
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation

```bash
# Install dependencies
npm install

# For iOS, install CocoaPods
cd ios && pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

### Running Tests

```bash
npm test
```

## Helpline

For assistance, contact the AP Government Citizen Helpline:

- **Phone**: 14566 / 1800-425-0808
- **Email**: support@egov.ap.gov.in

---

*Government of Andhra Pradesh — Serving Citizens with Technology*
