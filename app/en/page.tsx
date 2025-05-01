import MainContent from '@/app/components/MainContent'; // Assuming component path
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextCore - Simplify your ISP management and boost your performance',
};

export default function EnHome() {
  return (
    <MainContent lang="en" />
  );
}
