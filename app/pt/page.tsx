import MainContent from '@/app/components/MainContent'; // Assuming component path
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextCore - Simplifique o gerenciamento do seu ISP e aumente seu desempenho',
};

export default function PtHome() {
  return (
    <MainContent lang="pt" />
  );
}
