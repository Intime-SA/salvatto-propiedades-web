import PropiedadesLayout from '../layout';

const page = ({ params }: { params: { category: string } }) => {
  return (
    <PropiedadesLayout params={params}>
      <div>
        <h1>Propiedades {params.category}</h1>
      </div>
    </PropiedadesLayout>
  );
};

export default page; 