import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class Portfolio extends Component {
    listProjects(data) {
        var projects = data.map((projects, index) => {
            return (
                <div>
                    <li>
                        <a className="links" href={projects.url}>
                            {projects.title}
                        </a>
                    </li>
                    <div className="player-wrapper">
                        <ReactPlayer
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                                justifyContent: "center"
                            }}
                            className="react-player"
                            url={projects.video}
                            playing={false}
                            loop
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <p style={{ paddingBottom: 20, paddingTop: 10 }}>
                        {projects.category}
                    </p>
                </div>
            );
        });
        return projects;
    }

    render() {
        if (this.props.data) {
            var projects0 = this.listProjects(this.props.data.hackathons);
            var projects1 = this.listProjects(this.props.data.cs0150);
            var projects2 = this.listProjects(this.props.data.cs0160);
            var projects3 = this.listProjects(this.props.data.cs0330);
        }

        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <h2> Hackathons and Personal Projects </h2>
                        <div>
                            <Carousel
                                showIndicators
                                swipable
                                infiniteLoop
                                showThumbs={false}
                                style={{ overflow: "hidden", zIndex: 100000 }}
                            >
                                {projects0}
                            </Carousel>
                        </div>
                        <h2>
                            <a
                                className="title"
                                href="http://cs.brown.edu/courses/csci0150/"
                            >
                                {" "}
                                CS0150: Introduction to Object-Oriented
                                Programming{" "}
                            </a>
                        </h2>
                        <div>
                            <Carousel
                                showIndicators
                                swipable
                                infiniteLoop
                                showThumbs={false}
                                style={{ overflow: "hidden", zIndex: 100000 }}
                            >
                                {projects1}
                            </Carousel>
                        </div>
                        <h2>
                            <a
                                className="title"
                                href="http://cs.brown.edu/courses/cs016/"
                            >
                                {" "}
                                CS0160: Introduction to Data Structures and
                                Algorithms{" "}
                            </a>
                        </h2>
                        <div>
                            <Carousel
                                showIndicators
                                swipable
                                infiniteLoop
                                showThumbs={false}
                                style={{ overflow: "hidden" }}
                            >
                                {projects2}
                            </Carousel>
                        </div>
                        <h2>
                            <a
                                className="title"
                                href="http://cs.brown.edu/courses/cs033/"
                            >
                                {" "}
                                CS0330: Introduction to Computer Systems{" "}
                            </a>
                        </h2>
                        <div>
                            <Carousel
                                showIndicators
                                swipable
                                infiniteLoop
                                showThumbs={false}
                                style={{ overflow: "hidden" }}
                            >
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
