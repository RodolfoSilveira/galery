import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from 'gatsby-image';
import '../assets/style.css'
import Header from '../components/Header'

const Index = () => {
  const {allFile: {nodes}} = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        nodes {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 280) {
              ...GatsbyImageSharpFluid
            }
          }
          name
          relativePath
        }
      }
    }
  `);

  return (
    <div>
      <Header title='Galeria de Imagem' />
      <div className="grid max-w-4xl grid-cols-2 gap-4 mx-auto">
        {nodes.map((image) => {
          return (
            <div className="shadow rounded">
              <Link to={'/image/'+image.relativePath}>
                <Image className="rounded-t" fluid={image.childImageSharp.fluid} />
                <p className="p-6">{image.name}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Index;
