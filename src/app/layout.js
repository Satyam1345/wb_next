// src/app/layout.js
import './globals.css';
export const metadata = {
  title: 'My Next.js App',
  description: 'A modern Next.js app with the App Router.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <h1>My App</h1>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 My App</footer>
      </body>
    </html>
  );
}
