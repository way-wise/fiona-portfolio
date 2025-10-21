// import HeroSection from "@/app/(main)/_components/hero-section";

import HeroSection from "./_components/hero-section";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen">
//       <HeroSection />
//     </div>
//   );
// };

// export default HomePage;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff5f5]">
      <HeroSection />
    </main>
  );
}
