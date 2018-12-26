import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
class Portfolio extends Component {
  listProjects(data, margins) {
    var projects = data.map(function(projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div
          key={projects.title}
          style={{
            flex: 1,
            display: "flex",
            tableLayout: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h5
            style={{
              color: "#666969"
            }}
          >
            {projects.title}
          </h5>

          <div style={{ marginLeft: -margins }}>
            <ReactPlayer url={projects.video} playing loop controls />
          </div>
          <img src="" />
          {/* <p style={{ paddingBottom: 20 }}>{projects.category}</p> */}
        </div>
      );
    });
    return projects;
  }

  render() {
    if (this.props.data) {
      var projects = this.listProjects(this.props.data.cs0150, 75);
      var projects2 = this.listProjects(this.props.data.cs0160, 70);
      var projects3 = this.listProjects(this.props.data.cs0330, -10);
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <h2> CS0150 </h2>
            <div>
              <Carousel showIndicators swipable infiniteLoop showThumbs={false}>
                {projects}
              </Carousel>
            </div>
            <h2> CS0160 </h2>
            <div>
              <Carousel showIndicators swipable infiniteLoop showThumbs={false}>
                {projects2}
              </Carousel>
            </div>
            <h2> CS0330 </h2>
            <div>
              <Carousel showIndicators swipable infiniteLoop showThumbs={false}>
                {projects3}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
{
  /* Overlay component */
}
{
  /* <img alt={projects.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>

            <div className="link-icon">
                <i className="fa fa-link" />
              </div> */
}

/* old layout */
{
  /* <div
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
            </div> */
}
{
  /* <h2> Hackathon Projects </h2>
            <div
              id="portfolio-wrapper"
              className="bgrid-thirds s-bgrid-thirds cf"
            >
              {projects}
            </div> */
}
