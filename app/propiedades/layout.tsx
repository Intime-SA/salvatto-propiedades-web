import React from 'react';
import LayoutLanding from '@/components/LayoutLanding';

const PropiedadesLayout = ({ children, params }: { children: React.ReactNode; params: { category: string } }) => {
  const { category } = params;
  console.log(category, 'category');

  return (
    <LayoutLanding page='propiedades'>
      {children}
    </LayoutLanding>
  );
};

export default PropiedadesLayout;