import React, { Component } from "react";
import Particles from "react-particles-js";
class Header extends Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var networks = this.props.data.social.map(function(network) {
                return (
                    <li key={network.name}>
                        <a href={network.url}>
                            <i className={network.className} />
                        </a>
                    </li>
                );
            });
        }

        return (
            <div>
                <Particles
                    style={{ position: "absolute" }}
                    params={{
                        particles: {
                            number: {
                                value: 100
                            },
                            size: {
                                value: 5
                            }
                        },
                        interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            }
                        }
                    }}
                />
                <header id="home">
                    <nav id="nav-wrap">
                        <a
                            className="mobile-btn"
                            href="#nav-wrap"
                            title="Show navigation"
                        >
                            Show navigation
                        </a>
                        <a
                            className="mobile-btn"
                            href="#home"
                            title="Hide navigation"
                        >
                            Hide navigation
                        </a>

                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#about">
                                    About Me
                                </a>
                            </li>
                            {/* <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li> */}
                            <li>
                                <a className="smoothscroll" href="#portfolio">
                                    Works
                                </a>
                            </li>
                            {/* <li>
                                <a className="smoothscroll" href="#videos">
                                    Videos
                                </a>
                            </li> */}
                            <li>
                                <a className="smoothscroll" href="#contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">{name}</h1>
                            <h3>
                                <span>
                                    I'm Currently a {occupation} {description}
                                </span>
                            </h3>
                            <hr />
                            <ul className="social">{networks}</ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle" />
                        </a>
                    </p>
                </header>
            </div>
        );
    }
}

export default Header;
