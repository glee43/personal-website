import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Portfolio.css";
import Modal from "react-modal";
import Overlay from "../shared/Overlay/Overlay";
import Development from "./cs1300/Development/Development";
import Redesign from "./cs1300/Redesign/Redesign";
import IterativeDesign from "./cs1300/IterativeDesign/IterativeDesign";
import Personas from "./cs1300/Personas/Personas";

class Portfolio extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: true,
            modalContent: <Development closeModal={this.closeModal} />,
            // modalContent: (
            //     <div className="center">
            //         <h1>Still Under Construction!</h1>
            //     </div>
            // ),
            autoPlayCarousel: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true, autoPlayCarousel: false });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false, autoPlayCarousel: true });
    };

    listProjects(data) {
        var projects = data.map((project, index) => {
            return (
                <div
                    key={index}
                    className={"OneProjectContainer "}
                    id="ProfolioProjects"
                >
                    <Overlay
                        content={
                            <div>
                                <h3>{project.title}</h3>
                            </div>
                        }
                        popinStyle={"fadeIn-top"}
                        img={
                            project.image === ""
                                ? ""
                                : require("../../images/" + project.image)
                        }
                        openModal={this.openModal}
                    />
                </div>
            );
        });
        return projects;
    }

    render() {
        if (this.props.data) {
            var hackathons = this.listProjects(this.props.data.hackathons);
            var cs0150 = this.listProjects(this.props.data.cs0150);
            var cs0160 = this.listProjects(this.props.data.cs0160);
            var cs0330 = this.listProjects(this.props.data.cs0330);
            var cs1300 = this.listProjects(this.props.data.cs1300);

            var projects = [cs1300, hackathons, cs0330, cs0160, cs0150];

            var cs1300Projects = [
                <Development closeModal={this.closeModal} />,
                <Redesign closeModal={this.closeModal} />,
                <IterativeDesign />,
                <Personas />
            ];

            var projects2 = [
                {
                    title: "CS1300: User Interfaces and User Experience",
                    data: cs1300,
                    projects: cs1300Projects
                },

                {
                    title: "CS0330: Introduction to Computer Systems",
                    data: cs0330,
                    projects: []
                },
                {
                    title:
                        "CS0160: Introduction to Data Structures and Algorithms",
                    data: cs0160,
                    projects: []
                },
                {
                    title:
                        "CS0150: Introduction to Object-Oriented Programming",
                    data: cs0150,
                    projects: []
                },
                {
                    title: "Hackathons and Personal Projects",
                    data: hackathons,
                    projects: []
                }
            ];
        }

        return (
            <section id="portfolio">
                <div className="row">
                    <h1>Check Out Some of My Works.</h1>

                    <Carousel
                        //
                        showIndicators
                        swipable
                        infiniteLoop
                        showThumbs={false}
                        interval={2500}
                        autoPlay={this.state.autoPlayCarousel}
                        height="fit-content"
                    >
                        {projects2 &&
                            projects2.map((group, idx) => {
                                return (
                                    <div className="center ProjectsOverallContainter">
                                        <h2 className="ProjectsTitle">
                                            {group.title}
                                        </h2>

                                        <div className="center ">
                                            <div
                                                className={
                                                    "center ProjectsContainer"
                                                }
                                            >
                                                {group.data}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </Carousel>
                    <Modal
                        closeTimeoutMS={20}
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                        // overlayClassName={"PortfolioOverlay"}
                    >
                        {this.state.modalContent}
                    </Modal>
                </div>
            </section>
        );
    }
}

export default Portfolio;

const customStyles = {
    content: {
        // top: "50%",
        // left: "50%",
        // right: "auto",
        // bottom: "auto",
        // marginRight: "-50%",
        // transform: "translate(-50%, -50%)",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // flexDirection: "column",
        // color: "transparent",
        // WebkitOverflowScrolling: "touch"
        position: "absolute",
        top: "50px",
        left: "50px",
        right: "50px",
        bottom: "50px",
        backgroundColor: "black",
        overflow: "auto",
        transition: "opacity 2000ms ease-in-out"
    },
    overlay: {
        position: "fixed",
        margin: "0 auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(105, 105, 105, 0.85)",
        zIndex: 100,
        overflow: "scroll"
    }
};
