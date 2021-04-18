import React from 'react';

const AuthorBreadcrumb = ({ author }) => {
  const authorUrl = `/author/${author.id
    .toLocaleLowerCase()
    .replace(/ /g, '-')}/`;

  return (
    <div>
      <a href={authorUrl}>
        <img alt="" src={author.profileImage} />
      </a>
      <div>
        <span>By</span>
        <a href={authorUrl}>{author.id}</a>
      </div>
    </div>
  );
};
export default AuthorBreadcrumb;
