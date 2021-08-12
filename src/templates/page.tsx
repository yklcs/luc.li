import React, { FunctionComponent } from "react"
import styled from "styled-components"
import { graphql, PageProps, useStaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { format } from "date-fns"

import SEO from "../components/seo"
import "katex/dist/katex.min.css"
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image"
import { Content, Header, Layout, Wrapper } from "../components/mdx-page"
import { components } from "../components/mdx"

interface PageFrontmatter {
  title: string
  description: string
  large?: boolean
  image?: string
}

const BlogLayout: FunctionComponent<
  PageProps<null, { frontmatter: PageFrontmatter }, null>
> = ({ children, pageContext: { frontmatter } }) => {
  return (
    <>
      <SEO title={frontmatter.title} article />
      <MDXProvider components={components}>
        <Layout>
          <Header type="Page" {...frontmatter} />
          <Wrapper>
            <Content>{children}</Content>
          </Wrapper>
        </Layout>
      </MDXProvider>
    </>
  )
}

export { PageFrontmatter }
export default BlogLayout
