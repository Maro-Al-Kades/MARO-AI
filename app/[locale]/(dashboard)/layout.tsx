import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useLocale } from "next-intl";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="h-full relative">
      <div
        className={`hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 
        ${isRTL ? "md:right-0" : "md:left-0"}`}
      >
        <Sidebar />
      </div>
      <main className={`${isRTL ? "md:pr-72" : "md:pl-72"}`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
