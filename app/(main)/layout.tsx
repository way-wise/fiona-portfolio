import Navbar from "@/app/(main)/_components/navbar";
import { Footer } from "./_components/footer";
import { ContactModalProvider } from "@/providers/contact-modal-provider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ContactModalProvider>
      <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-background">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ContactModalProvider>
  );
};

export default MainLayout;
