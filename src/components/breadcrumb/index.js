import React from 'react';
import AuthorBreadcrumb from './author-breadcrumb';
import CategoriesBreadcrumb from './categories-breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const slashIconStyle = {
  textAlign: 'center',
  width: `17.6px`,
};

const containerStyle = {
  display: `flex`,
  flexDirection: `row`,
  width: `100%`,
};

const dateStyle = {
  color: `#aaaaaa`,
  textTransform: `uppercase`,
};

const PostBreadcrumb = ({ author, postDate, categories }) => {
  console.log({ author, postDate });
  return (
    <div style={containerStyle}>
      <AuthorBreadcrumb author={author} />
      <FontAwesomeIcon icon={['fab', 'slash']} style={slashIconStyle} />
      <div>
        <span style={dateStyle}>Modified date: {postDate}</span>
      </div>
      <FontAwesomeIcon icon={['fab', 'slash']} style={slashIconStyle} />
      <CategoriesBreadcrumb categories={categories} />
    </div>
  );
};
export default PostBreadcrumb;
