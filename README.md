<p align="center">
  <img src="./public/favicon.png" alt="Connectify Logo" width="200">
</p>

<h1 align="center">Connectify</h1>

Connectify is a virtual meeting platform offering easy link sharing, meeting history, upcoming meetings, and recordings.

## Features

- **Easy Link Sharing**: Create and share meeting links effortlessly.
- **Meeting History**: Keep track of all your past meetings.
- **Upcoming Meetings**: View and manage all your scheduled meetings.
- **Recordings**: Record and access meeting recordings.

## Getting Started

To get started with Connectify, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed. You can download Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/connectify.git
   cd connectify
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root directory of your project and add the following environment variables:

```plaintext
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-key-here>
CLERK_SECRET_KEY=<your-secret-here>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup

NEXT_PUBLIC_STREAM_API_KEY=<your-key-here>
STREAM_SECRET_KEY=<your-secret-here>

NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Replace the values with your actual keys and URLs.

### Running the App

To run the app in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the app for production:

```bash
npm run build
```

To start the app in production mode:

```bash
npm start
```

### Linting

To lint the code:

```bash
npm run lint
```

## Dependencies

- `@clerk/nextjs`: ^5.0.12
- `@radix-ui/react-avatar`: ^1.0.4
- `@radix-ui/react-dialog`: ^1.0.5
- `@radix-ui/react-slot`: ^1.0.2
- `@radix-ui/react-toast`: ^1.1.5
- `@stream-io/node-sdk`: ^0.2.3
- `@stream-io/video-react-sdk`: ^1.0.9
- `class-variance-authority`: ^0.7.0
- `clsx`: ^2.1.1
- `lucide-react`: ^0.378.0
- `next`: 14.2.3
- `react`: ^18
- `react-dom`: ^18
- `tailwind-merge`: ^2.3.0
- `tailwindcss-animate`: ^1.0.7

### Dev Dependencies

- `@types/node`: ^20
- `@types/react`: ^18
- `@types/react-dom`: ^18
- `eslint`: ^8
- `eslint-config-next`: 14.2.3
- `postcss`: ^8
- `tailwindcss`: ^3.4.1
- `typescript`: ^5

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
