import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const containerStyle = {
  display: `inline-flex`,
  flexDirection: `row`,
  verticalAlign: `middle`,
  textAlign: `left`,
};

const categoryStyle = { pointerEvents: `auto`, whiteSpace: `nowrap` };

const CategoriesBreadcrumb = ({ categories }) => {
  let categoryURL = '';
  return (
    <div style={containerStyle}>
      {categories.map((category, index) => {
        categoryURL += `/${category}/`;
        return (
          <div key={category} style={categoryStyle}>
            <a href={categoryURL}>{category}</a>
            {index !== categories.length - 1 ? (
              <FontAwesomeIcon icon={['fas', 'chevron-right']} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
export default CategoriesBreadcrumb;
