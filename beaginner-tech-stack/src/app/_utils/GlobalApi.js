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
        slug
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

const getCourseById = async (courseId) => {
  const query = gql`
  query MyQuery {
    courseList(where: {slug: "`+courseId+`"}) {
      author
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
      demoUrl
      description
      free
      id
      name
      slug
      sourceCode
      tag
      totalChapters
    }
  }
  
  `;

  const result = await request(Master_URL, query);
  return result;
}

const enrollToCourse = async (courseId, email) => {
  const query = gql`
  mutation MyMutation {
    createUserEnrollCourse(
      data: {courseId: "`+courseId+`", userEmail: "`+email+`", courseList: {connect: {slug: "`+courseId+`"}}}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    }
  }  
  `
  const result = await request(Master_URL, query);
  return result;
} 



export default {
  getAllCourseList,
  getSideBanner,
  getCourseById,
  enrollToCourse
};