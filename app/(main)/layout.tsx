import Navbar from "@/app/(main)/_components/navbar";
import { Footer } from "./_components/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-background">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
