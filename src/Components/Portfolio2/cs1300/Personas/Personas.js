import React, { Component } from "react";
import "./Personas.css";
import { Colors } from "../Colors";

class Personas extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ProjectContainer">
                <div className="center">
                    <div className="PersonasImageContainer"></div>
                    <h1
                        className="center ProjectTitle"
                        style={{ color: Colors.white }}
                    >
                        Personas and Storyboarding for Nintendo Switch Joy Cons
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
                        Partners
                    </h3>
                    <p>Alex Homer, Rudra Srivastava</p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Background
                    </h3>
                    <p>
                        The Nintendo Switch is advertized as the ultimate
                        portable console, but how user friendly is the
                        controller especially as it relates to Super Smash
                        Ultimate? Through a series of user surveys, we were able
                        to construct mental models for a novice and experienced
                        player as well as personas for each of the respective
                        models. Given those personas, we were then able to
                        construct a storyboard for a novice user of the Nintendo
                        Switch Joy Con controller.
                        <strong> Check out the full document below!</strong>
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Design Considerations
                    </h3>
                    <p>
                        When we were first tackling this assignment, we had to
                        decide on the demographic of our users and gather a good
                        number of samples. We decided to gather a good mix of
                        experienced players and novice ones so that we can
                        create an accurate persona for our users. Through a
                        google form survey, we were able to start construct our
                        mental models and personas.
                    </p>
                    <div className="center IterativeDesignPrototypeImagesContainer">
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div
                                style={{ width: "75%" }}
                                className="IterativeDesignPrototypeImageContainer"
                            >
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src={require("./PersonasGraphs.png")}
                                />
                            </div>
                            <p>Figure 1: User Survey Response Graphs</p>
                        </div>
                    </div>

                    <p>
                        A more detailed outline of our mental models and
                        personas for a novice and expert player can be found in
                        the document under links, but I have included the
                        empathy maps for reference.
                    </p>
                    <div className="center IterativeDesignPrototypeImagesContainer">
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div
                                className="IterativeDesignPrototypeImageContainer"
                                style={{
                                    backgroundColor: "white",
                                    margin: "10px"
                                }}
                            >
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src={
                                        "https://lh4.googleusercontent.com/nrnjZo-AuBQXPgAu9lM0az7i2GJAhAFSpzHWQxQdk0ww2cmA0WdZPOiXCVi4qKU9R5bvROqQwCqAQJG3xsVex4LRcfKSX9mfCOkXMGEX"
                                    }
                                />
                            </div>
                            <p>Figure 2: Novice Empathy Map</p>
                        </div>
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div
                                className="IterativeDesignPrototypeImageContainer"
                                style={{
                                    backgroundColor: "white",
                                    margin: "10px"
                                }}
                            >
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src={
                                        "https://lh5.googleusercontent.com/Coe3uvVptZdbctsXGLGggUDnC2-sb572bP22qEgU4fQULOmQouKAQCDYJr1gN0Bh1cAmcTrneFNfh9L1Z04L-P-032sCEfozUpezeaf8"
                                    }
                                />
                            </div>
                            <p>Figure 3: Experienced Empathy Map</p>
                        </div>
                    </div>
                    <p>
                        From the novice empathy map and persona, we were then
                        able to construct a storyboard.
                    </p>
                    <div className="center IterativeDesignPrototypeImagesContainer">
                        <div className="center IterativeDesignPrototypeImageWithCaption">
                            <div
                                className="IterativeDesignPrototypeImageContainer"
                                style={{ width: "100%" }}
                            >
                                <img
                                    className="IterativeDesignPrototypeImage"
                                    src={
                                        "https://lh5.googleusercontent.com/MZiRHINGXIv73tPY-StSiOAOglpH5GVAKps9OougOhV5xETw5I6zKnEhqM7aPvR-utRF3Aas4mualEOb0esA_aZcUgNDg6G27m_Q4okA"
                                    }
                                />
                            </div>
                            <p>Figure 4: Novice Storyboard</p>
                        </div>
                    </div>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Conclusions
                    </h3>
                    <p>
                        This project allowed us to actually gather user data
                        about a device and analyze how people actually interact
                        with a product. We were able to find meaning from our
                        observations and questions and actually synthesize
                        mental models, personas, and a storyboard for a Nintendo
                        Switch Joy Con User.
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
                                "https://docs.google.com/document/d/1WytP2jpCjGI2XeaETKac9eRbYK1RJkRBtpsFV9eTh5I/edit?usp=sharing"
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

export default Personas;
