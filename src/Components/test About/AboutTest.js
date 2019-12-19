import React, { Component } from "react";
import "./About.css";
import posed, { PoseGroup } from "react-pose";
import { linear } from "@popmotion/easing";
import VisibilitySensor from "react-visibility-sensor";

const Box = posed.img({
    visible: {
        opacity: 1,
        scaleY: 1,
        transition: {
            opacity: { ease: "easeOut", duration: 300 },
            default: { ease: "linear", duration: 500 }
        }
    },
    hidden: { opacity: 0 }
});

const Modal = posed.img({
    enter: {
        x: 100,
        opacity: 1,
        delay: 300,
        transition: {
            x: { type: "spring", stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        x: -50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

const Shade = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

class AboutTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({ isVisible: !this.state.isVisible });
        // }, 1000);
    }

    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var profilepic = "images/" + this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <VisibilitySensor
                onChange={viz => {
                    this.setState({ isVisible: viz });
                    console.log("I'm here!");
                }}
            >
                <section id="about">
                    <PoseGroup>
                        {this.state.isVisible && [
                            // If animating more than one child, each needs a `key`
                            <Shade key="shade" className="shade" />,
                            <Modal
                                key="profile_img_modal"
                                src={profilepic}
                                className="modal"
                            />
                        ]}
                    </PoseGroup>
                    <PoseGroup>
                        {this.state.isVisible && [
                            // If animating more than one child, each needs a `key`
                            <Shade key="shade" className="shade" />,
                            <Modal
                                key="profile_img_modal"
                                src={profilepic}
                                className="modal"
                            />
                        ]}
                    </PoseGroup>
                </section>
            </VisibilitySensor>
        );
    }
}

export default AboutTest;
