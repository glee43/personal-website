import React, { Component } from "react";
import ReactPlayer from "react-player";

class Portfolio extends Component {
  listProjects(data) {
    var projects = data.map(function(projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <div className="video-wrapper">
              <h5>{projects.title}</h5>
              <ReactPlayer
                url={projects.video}
                playing
                loop
                controls
                width="auto"
                height="auto"
                fileConfig={{
                  attributes: {
                    style: {
                      display: "block",
                      width: "auto",
                      height: "auto"
                    }
                  }
                }}
              />
              {/* <p>{projects.category}</p> */}
            </div>

            {/* Overlay component */}
            {/* <img alt={projects.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>

            <div className="link-icon">
                <i className="fa fa-link" />
              </div> */}
          </div>
        </div>
      );
    });
    return projects;
  }

  render() {
    if (this.props.data) {
      var projects = this.listProjects(this.props.data.cs0150);
      var projects2 = this.listProjects(this.props.data.cs0160);
      var projects3 = this.listProjects(this.props.data.cs0330);
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <h2> CS0150 </h2>
            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {projects}
            </div>
            <h2> CS0160 </h2>
            <div
              id="portfolio-wrapper"
              className="bgrid-halves s-bgrid-halves cf"
            >
              {projects2}
            </div>
            <h2> CS0330 </h2>
            <div
              id="portfolio-wrapper"
              className="bgrid-halves s-bgrid-halves cf"
            >
              {projects3}
            </div>
            {/* <h2> Hackathon Projects </h2>
            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {projects}
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
