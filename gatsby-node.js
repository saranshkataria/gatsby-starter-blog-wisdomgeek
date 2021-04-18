const path = require('path');

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
            categories
            author
          }
        }
      }
      allAuthorsJson {
        nodes {
          id
        }
      }
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `);

  let uniqueCategories = new Set();
  const posts = result.data.allMdx.nodes,
    postsPerPage = result.data.site.siteMetadata.postsPerPage,
    numPages = Math.ceil(posts.length / postsPerPage);

  posts.forEach(({ frontmatter: { slug, categories, author } }) => {
    createPage({
      path: `/${categories.join('/')}/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
        author,
      },
    });
    let categorySlug = '/';
    categories.forEach((category) => {
      categorySlug += category + '/';
      uniqueCategories.add(`${categorySlug}`);
    });
  });

  uniqueCategories.forEach((categorySlug) => {
    let categories = categorySlug.split('/');
    let category = categories[categories.length - 2];

    createPage({
      path: categorySlug,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category,
      },
    });
  });

  result.data.allAuthorsJson.nodes.forEach((author) => {
    createPage({
      path: `/author/${author.id.toLocaleLowerCase().replace(/ /g, '')}/`,
      component: path.resolve(`src/templates/author-template.js`),
      context: {
        authorId: author.id,
      },
    });
  });

  for (let i = 1; i < numPages; i++) {
    createPage({
      path: `/page/${i + 1}`,
      component: path.resolve('src/templates/blog-page-template.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  }
};
