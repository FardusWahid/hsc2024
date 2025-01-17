import "./globals.css";
import Nav from './component/sign'
import Navbar from "./component/navbar";


export const metadata = {
  title: "Apple 2024",
  description: "Apple Admission 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="select-none pointer-events-none">
        <Navbar/><br/><br/><br/><br className="max-sm:hidden"/>
        {children}
      </body>
    </html>
  );
}
