import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <Layout>
      <Posts posts={posts} />
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM Do, YYYY")
          author
          description
          categories
          image {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        excerpt
      }
    }
  }
`;

export default IndexPage;
