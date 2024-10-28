import { FC } from 'react';

type PageProps = {
  params: {
    slug?: string[]; // slug can be an array of strings or undefined
  };
};

// The component is now a Server Component
const Home: FC<PageProps> = async ({ params }) => {
  // Await params to ensure it's fully resolved before accessing its properties
  const { slug } = await params;

  return (
    <div className="flex justify-center items-center h-screen">
      Dynamic Page {slug ? slug.join('/') : 'No slug provided'}
    </div>
  );
};

export default Home;