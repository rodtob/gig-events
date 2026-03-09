# Gig Challenge Test

A concise React application that allows users to select betting options, assign stake amounts, and view a live summary of their **total bets** and **potential gain** without substracting the costs.

## Technical Choices

- **Zustand** is used for state management. It provides a simple and lightweight way to manage global state while avoiding heavy prop drilling across components.
- A small **sports icon dictionary** was added to easily map sports types to their respective icons.
- Basic **integration and acceptance tests** were implemented to validate the core functionality and user flows of the application.

## Requirements

Make sure you have the following installed:

- **Node.js** v18+
- **npm** v9+ (or **yarn** / **pnpm**)

You can verify your versions with:

```bash
node -v
npm -v
```

## Setup for Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Running Tests

Run the test suite with:

```bash
npm run test
```

The tests cover:

- **Integration tests** for key components
- **Acceptance tests** validating the main betting user flow


## Amount taken

4hours 30minutes