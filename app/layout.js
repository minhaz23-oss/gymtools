import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "GymTools: Your Ultimate Resource for In-depth Gym Equipment Reviews and Guides",
  description: "Struggling to choose the right dumbbells for your home gym? Gymtools provides a comprehensive guide considering weight, material, grip, and more. Find the perfect fit for your workouts today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
