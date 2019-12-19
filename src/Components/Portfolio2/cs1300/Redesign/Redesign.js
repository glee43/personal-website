import React, { Component } from "react";
import "./Redesign.css";
import { Colors } from "../Colors";

class Redesign extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ProjectContainer">
                <div className="center">
                    <div className="RedesignImageContainer"></div>
                    <h1
                        className="center ProjectTitle"
                        style={{ color: Colors.white }}
                    >
                        Craigslist Redesign
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
                        style={{ color: Colors.white, marginTop: "10px" }}
                    >
                        Partner
                    </h3>
                    <p>Naomi Lee</p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Background
                    </h3>
                    <p>
                        When we were task to redesign an interface of our
                        choosing, Craigslist quickly popped into the forefront
                        of our minds. Throughout the process, we created 5 low
                        fidelity mockups, a high fidelity mockup of the Single
                        Product page, and a responsize single React page for
                        that Single Product Page.
                        <strong> Check out the full document below!</strong>
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Design Considerations
                    </h3>
                    <p>
                        Intuitiveness, ease of learning, efficiency of use, and
                        memorability were all in the forefront of our thoughts
                        when we started our redesign using Balsamiq. As can be
                        seen in the navigation flowchart below, we started with
                        the main landing page in the center of the screen and
                        made it more visually appealing. We also reorganized the
                        layout to allow for easier navigation between the
                        various categories, and other features. All other pages
                        followed a similar approach and the full comparison
                        between the original and the redesign can be seen in the
                        doc below.
                    </p>
                    <div className="center IterativeDesignPrototypeImagesContainer">
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div
                                className="IterativeDesignPrototypeImageContainer"
                                style={{ width: "75%" }}
                            >
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src="https://lh5.googleusercontent.com/i3N6nCeI-W8eA1ofII-OK_09c0TvaJkrPSmJg87lQvzNhKKLMlRIhvEN30mylOxezCi_qucUUZhYiT95hiYC7C38mp9xUIZMzi2JCsbmUWreZN0WuV-XSFMMZ_kUePwA5aSGUMpg"
                                />
                            </div>
                            <p>
                                Figure 1: Navigation Flowchart for our
                                low-fidelity mockup
                            </p>
                        </div>
                    </div>
                    <p>
                        Once we had our 5 redesigned pages, we decided to fully
                        design the Single Product Page in Figma and make it
                        responsive to a variety of devices. This can be seen in
                        the image below.
                    </p>
                    <div className="center IterativeDesignPrototypeImageWithCaption">
                        <div className="IterativeDesignPrototypeImageContainer">
                            <img
                                className="IterativeDesignPrototypeImage"
                                src="https://lh6.googleusercontent.com/E1maFRfbOiIOiYEEvKxilhbsZnMgI10WL8Hd7T6rlyXFBoog3PV_ra7kzcQy_zm_KfmaHNRHjp6c2dDoxhx3Ro8xNH_3OnWSoULvFy-z"
                            />
                        </div>
                        <p>Figure 2: Single Page redesign on Figma</p>
                    </div>
                    <p>
                        We also create a single React App which is responsive in
                        a variety of devices and the Github Repository can be
                        accessed under links.
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Conclusions
                    </h3>
                    <p>
                        Redesigning Craigslist allowed us to dive deeply into
                        considering what features are important to the end user
                        and thinking about how to best improve an existing
                        system already used by millions of people. Of course,
                        without extensive user testing of our redesign, we
                        cannot say for sure our designs are actually an
                        improvement.
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Links
                    </h3>
                    <p>
                        The full project document can be found{" "}
                        <a
                            className="ProjectLinks"
                            href={
                                "https://docs.google.com/document/d/1MlXaniHTaHbgi8m5VMY8Oxr844hm6TdKEV7xyA6-Tkw/edit?usp=sharing"
                            }
                        >
                            here
                        </a>
                        <br />
                        The Github to the single product responsive React Page
                        can be found{" "}
                        <a
                            className="ProjectLinks"
                            href={
                                "https://github.com/glee43/craigslist-redesign-"
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

export default Redesign;
