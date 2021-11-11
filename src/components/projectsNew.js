import React, { useState } from 'react'
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
        background-color: #000;
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

  const [shown, setShown] = useState('cover');

  const showContain = (e) => {
    e.target.style.backgroundSize = "contain";
  }

  const hideContain = (e) => {
    e.target.style.backgroundSize = "cover";
  }

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
                      onMouseEnter={showContain}
                      onMouseLeave={hideContain}
                >&nbsp;
                </div>
            )
          })}
        </div>

      </ProjectStyles>

    )
}

