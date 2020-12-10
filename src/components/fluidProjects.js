import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'


class FluidProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      display: 'flex',
      thumbnail: ''
    });
  }
  render() {

    return (

    <StaticQuery
        query={graphql`
          query MyQuery {
            allFile {
              edges {
                node {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        `}

        render={data => (
        <div className="projects">
          <div className="row">



          <Image fluid={data.allFile.edges.node.childImageSharp.fluid} />



        </div>
      </div>
      )}
    />







      
    )
  }
}

export default FluidProjects