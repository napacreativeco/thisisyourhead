import React from 'react'
import JSONData from "../data/data.json"

class ProjectsAlt extends React.Component {
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
      <div className="projects">
        <div className="row">
          {JSONData.projects.map((data, index) => {
            return (
                <div style={{margin: '5px'}}>
                  <img src={data.image} alt={data.title} style={{ width: '200px'}} />
                  <div className="cell-overlay">
                    <h3>{data.title}</h3>
                    <p className="tags">{data.type}</p>
                    <p className="description">{data.description}</p>
                    <p className="link" onClick={() => {
                      this.setState({ display: 'flex', thumbnail: data.image })
                    }}>view larger</p>
                  </div>
                  <div className="modal" onClick={() => {
                    this.setState({ display: 'none' })
                  }} style={{ display: this.state.display }}>
                    <img src={this.state.thumbnail} alt={data.title} />
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ProjectsAlt