const { gql, default: request } = require("graphql-request");

const Master_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllCourseList = async () => {
  const query = gql`
    query MyQuery {
      courseLists {
        author
        name
        id
        free
        description
        demoUrl
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video
          }
        }
        sourceCode
        totalChapters
        tag
      }
    }
  `

  const result = await request(Master_URL, query);
  return result;
};

const getSideBanner = async () => {
  const query = gql`
  query GetSideBanner {
    sideBanners {
      id
      name
      banner {
        id
        url
      }
      url
    }
  }  
  `;

  const result = await request(Master_URL, query);
  return result;

}

export default {
  getAllCourseList,
  getSideBanner
};
