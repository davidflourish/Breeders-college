import { Admissions } from "../components/Admissions";

interface AdmissionsPageProps {
  onNavigate: (page: string) => void;
}

export function AdmissionsPage({ onNavigate }: AdmissionsPageProps) {
  return (
    <main className="pt-20">
      <Admissions onNavigate={onNavigate} />
    </main>
  );
}