import React, { Component } from "react";
import "./Overlay.css";

class Overlay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a onClick={this.props.openModal} className="content">
                <img className="project-inner-img" src={this.props.img}></img>
                <div className="content-overlay"></div>

                <div
                    className={["content-details", this.props.popinStyle].join(
                        " "
                    )}
                >
                    {this.props.content}
                </div>
            </a>
        );
    }
}

export default Overlay;
