import LayoutLanding from '@/app/LayoutLanding'
import React from 'react'

const page = ({ params }: { params: { category: string } }  ) => {
    const { category } = params;
    console.log(category, 'category');

  return (
    <LayoutLanding page='propiedades'>
        <div>
            <h1>Propiedades {category}</h1>
        </div>
    </LayoutLanding>
  )
}

export default page 