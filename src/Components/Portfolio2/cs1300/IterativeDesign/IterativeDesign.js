import React, { Component } from "react";
import "./IterativeDesign.css";

class IterativeDesign extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ProjectContainer">
                <div className="center">
                    <div className="IterativeDesignImageContainer"></div>
                    <h1
                        className="center ProjectTitle"
                        style={{ color: "white" }}
                    >
                        Iterative Design
                    </h1>
                    <button
                        className="CloseModalButton"
                        onClick={this.props.closeModal}
                    >
                        {" "}
                        X
                    </button>
                </div>
                <div className="ProjectContent">
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: "white", marginTop: "10px" }}
                    >
                        Partners
                    </h3>
                    <p>Kyle Qian, Ryan Choi, Claire Lin</p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: "white" }}
                    >
                        Background
                    </h3>
                    <p>
                        Given just the description of a startup in YCombinator's
                        S19 Demo Days (Listle, platform that allows people to
                        listen to articles instead of reading them), can we
                        design an interface for the startup without looking at
                        their designs? In the course of a couple of weeks we
                        went through several iterations and rough wireframes to
                        actually create a high-fidelity prototype in Figma. We
                        shared our prototype with our fellow class mates and got
                        live feedback on our designs. Then through
                        UserTesting.com, we shared our final designs with
                        complete strangers and recieved feedbacks which we
                        documented.
                        <strong> Check out the full document below!</strong>
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: "white" }}
                    >
                        Design Considerations
                    </h3>
                    <p>
                        When we were designing the interfaces, we kept in mind
                        our main users as people who have long commutes/busy
                        lives and like to stay updated on current news. They are
                        the most frequent users of the site and would be most
                        drastically affected by interface design choices. Any
                        changes to the interface could lead to a better/worse
                        experience in terms of time spent, usability, and
                        readability for the users. We want to ensure that the
                        layout of our interfaces appeals to all audiences, and
                        that users of the site can easily browse through our
                        selections. We also focused on simplicity and tried to
                        minimize clutter where possible. We utilized Balsamiq to
                        create low-fidelity mock-ups on potential interface
                        designs for the Listle platform. Some of these designs
                        are shown below:
                    </p>
                    <div className="center IterativeDesignPrototypeImagesContainer">
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div className="IterativeDesignPrototypeImageContainer">
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src="https://lh3.googleusercontent.com/Q6UR7VJgTvWr6HYZeWVCncPzqHVsVNsUc5j7diX97vGJWokvg9rAwL6vvUvEBVHUsLgBbPw_NY7rBuELcxgqm2I6NJAYL9WU0F8Zc7YS"
                                />
                            </div>
                            <p>[Landing Page]</p>
                        </div>
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div className="IterativeDesignPrototypeImageContainer">
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src="https://lh5.googleusercontent.com/uSBJlevoxwuXb8xaZN4iRBXMFutdvi66_fPWFuB5XeNgq4gDJhirSX_uJMqdOtDyh0scV33MGFi0rb_NkoGIUN2R27BzstMWDI9ofhkg"
                                />
                            </div>
                            <p>[Categories/Article Explore Page]</p>
                        </div>
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div className="IterativeDesignPrototypeImageContainer">
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src="https://lh6.googleusercontent.com/2Yr3XmK3qxULLvNjIzZau1SxRegGkIzktIw7iVGOAbtHsDsyre5zI89MIqqRZ4rkif6eOfKPQcNBZPCrrCnu3tfJHUx0GgHx8Xv-R5nq"
                                />
                            </div>
                            <p>[Single Article Page]</p>
                        </div>
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div className="IterativeDesignPrototypeImageContainer">
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src="https://lh3.googleusercontent.com/GzF_RYi6_7E-V_Ptq8It-mMFaXl68cpm3Lx6EK-nttmjv-u9UP__nowQS-99T3uPv_dTWU9ftYq_Qt3s2UpMS9iMuIs6ZCU_bEJT56-G"
                                />
                            </div>
                            <p>[Profile Page]</p>
                        </div>
                    </div>

                    <p>
                        Then we divided up the pages and completed a
                        high-fidelity prototype using Figma{" "}
                        <a
                            className="ProjectLinks"
                            href={
                                "https://www.figma.com/proto/Imri3dvurG67KPBeATMQ6r/CS1300%3A-Iterative-Design?node-id=35%3A84&scaling=min-zoom"
                            }
                        >
                            here.
                        </a>{" "}
                        Once we had the finished prototype, we used
                        UserTesting.com to test our designs. We gave the testers
                        the overall task of navigating through the pages and the
                        results and analysis of what happend can be seen in the
                        document attatched below.
                    </p>

                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: "white" }}
                    >
                        Conclusions
                    </h3>
                    <p>
                        Throughout this project, we designed and reconsidered
                        our designs multiple times to hone in on the features
                        that were most important. In order to incorporate
                        everyone's ideas, we had to make some sacrifices and due
                        to time constraints, some features and design lapses
                        were inevitable.
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: "white" }}
                    >
                        Links
                    </h3>

                    <p>
                        The full project document can be found{" "}
                        <a
                            className="ProjectLinks"
                            href={
                                "https://docs.google.com/document/d/1wbfUgmze_TqmsTojBb6VYM5_whpqnI9WeF-uNKaeNhQ/edit?usp=sharing"
                            }
                        >
                            here
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default IterativeDesign;
