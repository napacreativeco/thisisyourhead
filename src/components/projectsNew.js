import React from 'react'
import JSONData from "../data/data.json"
import styled from 'styled-components';

const ProjectStyles = styled.section`
.row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    width: 100%;
  }
  .cell {
    height: 400px;
  }

  
  @media screen and (max-width: 850px ) {
    .row {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 600px ) {
    .row {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (max-width: 500px ) {
    .row {
      grid-template-columns: 1fr;
    }
  }
`;

class ProjectsNew extends React.Component {



  render() {

    return (

      <ProjectStyles className="projects">

        <div className="row">
          {JSONData.projects.map((data, index) => {
            return (
              
                <div className="cell" key={data.slug} 
                     style={{ 
                        background: 'url(' + data.src + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundColor: '#eaeaea'}}
                >
                </div>
            )
          })}
        </div>
      </ProjectStyles>

    )
  }
}

export default ProjectsNew