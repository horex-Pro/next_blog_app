import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import Header from "@/components/Header";
export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: " وب اپلیکیشن مدیریت بلاگ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="dark-mode">
      <body
        className={`min-h-screen font-sans ${vazirFont.variable}  font-sans`}
      >
        <Header />
        <div className=" container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
