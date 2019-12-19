import React, { Component } from "react";
import "./About.css";
import posed from "react-pose";

const Box = posed.img({
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
});

class About extends Component {
    state = { isVisible: true };
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
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <Box
                            className="profile-pic"
                            src={profilepic}
                            alt="George Lee Profile Pic"
                            pose={this.state.isVisible ? "visible" : "hidden"}
                        />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span>
                                    <br />
                                    <span>
                                        {street}
                                        <br />
                                        {city} {state}, {zip}
                                    </span>
                                    <br />
                                    <span>{phone}</span>
                                    <br />
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={resumeDownload} className="button">
                                        <i className="fa fa-download"></i>
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
