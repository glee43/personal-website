import React, { Component } from "react";
import ReactPlayer from "react-player";
class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false, playingMessage: "Play All" };
  }

  vidPlay = () => {
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.setState({ isPlaying: false, playingMessage: "Play All" });
    } else {
      this.setState({ isPlaying: true, playingMessage: "Pause All" });
    }

    // window.scrollY > this.prev
    //   ? !isPlaying && this.setState({ isPlaying: true })
    //   : isPlaying && this.setState({ isPlaying: false });

    // this.prev = window.scrollY;
  };
  componentDidMount() {
    // window.addEventListener("scroll", this.vidPlay);
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.vidPlay);
  }
  listProjects = data => {
    const { isPlaying } = this.state;
    var projects = data.map(function(projects) {
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div
            className="item-wrap"
            style={{
              color: "#666969",
              background: "#292929"
            }}
          >
            <h5
              style={{
                color: "#666969",
                background: "#292929"
              }}
            >
              {projects.title}
            </h5>

            <ReactPlayer
              style={{
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
                background: "#292929"
              }}
              url={projects.video}
              controls
              playing={isPlaying}
              loop
              volume={0}
              height="100%"
              width="100%"
            />
          </div>
        </div>
      );
    });
    return projects;
  };

  render() {
    if (this.props.data) {
      var projects = this.listProjects(this.props.data.I2018);
    }

    return (
      <section id="videos">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out My Life.</h1>
            <h2> 2018</h2>
            <h2 style={{ marginBottom: 0, marginTop: -20, color: "gray" }}>
              <button
                className="submit"
                onClick={() => this.vidPlay()}
                style={{}}
              >
                {this.state.playingMessage}
              </button>
            </h2>
            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Videos;
