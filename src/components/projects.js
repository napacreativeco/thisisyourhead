import React from 'react'
import JSONData from "../data/data.json"



class Projects extends React.Component {
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
                <div
                  className="cell"
                  style={{ 
                  background: 'url(' + data.imageSmall + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center' }}
                  key={data.slug}>

                  <div className="cell-overlay">
                    <h3>{data.title}</h3>
                    <p className="tags">{data.type}</p>
                    <p className="description">{data.description}</p>
                    <button className="link"
                      onClick={() => {
                        this.setState({ display: 'flex', thumbnail: data.image })
                      }}>view larger</button>
                  </div>

                  <div className="modal" style={{ display: this.state.display, flexDirection: 'column' }}>
                    <button onClick={() => {
                        this.setState({ display: 'none' })
                       }}
                       style={{ color: '#eaeaea'}}>close_window</button>
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

export default Projects