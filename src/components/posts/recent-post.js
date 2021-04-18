import React from 'react';

const RecentPost = ({ frontmatter }) => {
  const { title, description, slug, categories, author, date } = frontmatter;
  const mainCategory = categories[categories.length - 1],
    postUrl = `/${categories.join('/')}/${slug}/`,
    authorUrl = `/author/${author.toLocaleLowerCase().replace(/ /g, '-')}/`,
    categoryUrl = `/${categories.join('/')}/`;
  return (
    <div>
      <div>
        <div>
          <h3>
            <a href={postUrl} rel="bookmark" title={title}>
              {title}
            </a>
          </h3>
          <div>
            <a href={categoryUrl}>{mainCategory}</a>
            <span>
              <span>
                <a href={authorUrl}>{author}</a>
                <span>-</span>
              </span>
              <span>
                <time datetime={date}>Modified date: {date}</time>
              </span>
            </span>
          </div>
          <div> {description}</div>
          <div>
            <a href={categoryUrl}>Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecentPost;
