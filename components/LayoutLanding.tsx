import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function LayoutLanding({
  children,
  page,
}: {
  children: React.ReactNode;
  page?: string;
}) {
  return (
    <>
      {page !== "propiedades" ? (
        <>
          {" "}
          <Header />
          <HeroSection page={page} />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
