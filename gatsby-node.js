const { createFilePath } = require("gatsby-source-filesystem")
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === "Mdx" &&
    node.fileAbsolutePath.includes("/blog/")
  ) {
    const slug = replacePath(
      createFilePath({ node, getNode, basePath: "content/blog" })
    )
    createNodeField({
      node,
      name: "slug",
      value: `/blog${slug}`,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      date: new Date().toISOString(),
    },
  })
}
