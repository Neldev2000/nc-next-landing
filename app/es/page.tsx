import MainContent from '@/app/components/MainContent'; // Assuming component path
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextCore - Simplifica la gestión de tu ISP y potencia tu rendimiento',
};

export default function EsHome() {
  return (
    <MainContent lang="es" />
  );
}
