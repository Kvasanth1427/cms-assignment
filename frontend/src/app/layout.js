import "./globals.css";
import ReduxProvider from "../providers/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "CMS Admin",
  description: "Content Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}

          <ToastContainer
            position="top-right"
            autoClose={3000}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}