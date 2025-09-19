import { Hero } from "../components/Hero";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
    </main>
  );
}