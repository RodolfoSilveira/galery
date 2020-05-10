import React from 'react';
import Header from '../components/Header';
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

const templates = ({data}) => {
  return (
    <div>
      <Header title={data.file.relativePath} />
      <Image fluid={data.file.childImageSharp.fluid} />
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!){
    file(relativePath: { eq: $id }) {
      extension
      relativePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default templates;
