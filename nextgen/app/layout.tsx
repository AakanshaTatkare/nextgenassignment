import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Homee from "@/components/homee";


export const metadata = {
  title: "bloggers app",
  description:
    "Next.js + Typescript template for building robust web applications",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className=" font-serif">
          <Navbar/>
        <main className="app">
        {children}
        <Homee/></main>
         <Footer/>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
