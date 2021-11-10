import React from 'react'
import JSONData from "../data/data.json"
import styled from 'styled-components';

const ProjectStyles = styled.section`
    width: 100%;
    max-width: 100%;

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

export default function ProjectsNew() {

    return (

      <ProjectStyles>

        <div className="row">
            
          {JSONData.projects.map((data) => {
            return (
              
                <div className="cell" key={data.slug} 
                     style={{ 
                        background: 'url(' + data.src + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundColor: '#eaeaea'}}
                >&nbsp;
                </div>
            )
          })}
        </div>

      </ProjectStyles>

    )
}

