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

  componentDidMount() {
    const preLoader = document.querySelector(".preloader");

    setTimeout(function() {
      preLoader.style.display = "none"
    }, 2000)

  }

  render() {

    return (

      <div className="projects">
        <div className="row">
          {JSONData.projects.map((data, index) => {
            return (
              
                <div className="cell" key={data.slug} 
                     style={{ 
                        background: 'url(' + data.src + ')',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundColor: '#222222'
                     }}>

                  <div className="cell-overlay">
                    <div><h3>{data.title}</h3></div>
                    <div><p className="tags">{data.type}</p></div>
                    <div><p className="description">{data.description}</p></div>
                    <div>
                      <button className="link" onClick={() => { this.setState({ display: 'flex', thumbnail: data.src }) }}>view larger</button>
                    </div>
                  </div>

                  <div className="modal" style={{ display: this.state.display, flexDirection: 'column', touchAction: 'none' }}>
                    <button onClick={() => {
                        this.setState({ display: 'none' })
                       }}
                       style={{ color: '#eaeaea', background: 'transparent', border: '0px', outline: '0px' }}>close_window</button>
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