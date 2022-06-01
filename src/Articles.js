import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './dataContext';
function Articles() {
  const dataInfo = useContext(DataContext);
  if (!dataInfo.isLogin) {
    throw new Error('Auth Failed');
  }

  return (
    <ul className='articles'>
      {dataInfo.data.map((article, index) => (
        <li key={index}>
          <Link to={'articles/' + article.slug}>
            <h3>{article.title}</h3>
          </Link>
          <small>{article.author}</small>
        </li>
      ))}
    </ul>
  );
}

export default Articles;
