import BottomNav from "@/components/navigation/BottomNav";
import TopNav from "@/components/navigation/TopNav";
import MainSection from "@/components/section/MainSection";

export default function Home() {
  return (
    <main className="h-screen">
      <TopNav />
      <MainSection />
      <BottomNav />
    </main>
  );
}
