import React, { Component } from "react";
import "./Development.css";
import "../../../Portfolio2/Portfolio.css";
import { Colors } from "../Colors";
class Development extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ProjectContainer">
                <div className="center">
                    <div className="DevelopmentImageContainer"></div>
                    <h1
                        className="center ProjectTitle"
                        style={{ color: Colors.white }}
                    >
                        Designing a Super Smash Melee Character Filter
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
                        Ever wanted to sort the original 15 Smash Melee
                        Characters to learn more about their attributes? Well
                        now you can! You can now sort these iconic characters by
                        their Weight class, their Franchise, whether they are a
                        Hero or Villian, and sort them alphabetically or by
                        number! You can also easily favorite the characters you
                        like and revert the filters to apply new filters!
                        <strong> Try it out in the link below!</strong>
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Design Considerations
                    </h3>
                    <div className="center IterativeDesignPrototypeImageWithCaption">
                        <div
                            className="IterativeDesignPrototypeImageContainer"
                            style={{ width: "50%" }}
                        >
                            <img
                                className="IterativeDesignPrototypeImage"
                                src={require("../../../../images/SmashMeleeFilter.png")}
                            />
                        </div>
                        <p>Figure 1: Smash Filter Screenshot</p>
                    </div>
                    <p>
                        There were several design considerations when we were
                        creating the website. The choice of fonts and layout was
                        meant to evoke an 2000's vibe reminecent of earlier,
                        simplier websites. To add affordances for the user,
                        arrows were shown next to the filter categories,
                        indicating they were dropdown menus. Since Favoriting
                        and Reverting are special actions and are not dropdown
                        menus, they were given accent colors to emphasize this
                        distinction.
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Conclusions
                    </h3>
                    <p>
                        Through this project, we were able to apply the design
                        principles taught in class and learn a bit more about
                        how to use React by gathering data and apply multiple
                        filters on them.
                    </p>
                    <h3
                        className="ProjectSectionTitle"
                        style={{ color: Colors.white }}
                    >
                        Links
                    </h3>

                    <p>
                        The site was created using React and deployed with
                        Netlify, it can be found{" "}
                        <a
                            className="ProjectLinks"
                            href={"https://smash-melee-filter.netlify.com/"}
                        >
                            here
                        </a>
                        <br />
                        The Github Repository can be found{" "}
                        <a
                            className="ProjectLinks"
                            href={"https://github.com/glee43/CS1300Development"}
                        >
                            here
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Development;
