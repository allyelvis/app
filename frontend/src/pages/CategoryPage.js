import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  const formattedCategory = category.replace(/-/g, ' ');

  return (
    <div>
      <h2>{formattedCategory} Businesses</h2>
      <p>Here you can register or view businesses under the {formattedCategory} category.</p>
    </div>
  );
};

export default CategoryPage;
