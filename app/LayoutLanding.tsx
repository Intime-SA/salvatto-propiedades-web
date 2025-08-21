import Header from '@/components/header';
import HeroSection from '@/components/hero-section';

export default function LayoutLanding({
  children,
  page,
}: {
  children: React.ReactNode
  page: string
}) {
  return (
    <>
      <Header />
      {page !== 'sobre-nosotros' && <HeroSection page={page} />}
      {children}
    </>
  );
}