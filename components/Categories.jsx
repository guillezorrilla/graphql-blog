import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-3'>
      <h3 className='text-lg mb-8 font-semibold border-b pb-4'>Categories</h3>
      {categories.map((categorie) => (
        <Link key={categorie.slug} href={`/category/${categorie.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {categorie.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
