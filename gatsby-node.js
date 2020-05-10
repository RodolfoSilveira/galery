const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const images = await graphql(`
    query MyQuery {
      allFile {
        nodes {
          relativePath
        }
      }
    }
  `);

  const template = path.resolve('src/templates/image.js')
  images.data.allFile.nodes.forEach(edge => {
    createPage({
      path: '/image/'+edge.relativePath,
      component: template,
      context: {
        id: edge.relativePath
      }
    })
  })
};
