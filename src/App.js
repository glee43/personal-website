import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio2/Portfolio";
import Videos from "./Components/Videos/Videos";
import AboutTest from "./Components/test About/AboutTest";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foo: "bar",
            resumeData: {}
        };
    }

    getResumeData = () => {
        $.ajax({
            url: "/resumeData.json",
            dataType: "json",
            cache: false,
            success: function(data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    };

    componentDidMount() {
        this.getResumeData();
    }

    render() {
        return (
            <div className="App">
                <Header data={this.state.resumeData.main} />
                {/* <AboutTest data={this.state.resumeData.main} /> */}
                <About data={this.state.resumeData.main} />
                {/* <Resume data={this.state.resumeData.resume} /> */}
                <Portfolio data={this.state.resumeData.portfolio} />

                {/* <Videos data={this.state.resumeData.videos} /> */}
                {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
                <Contact data={this.state.resumeData.main} />
                <Footer data={this.state.resumeData.main} />
            </div>
        );
    }
}

export default App;
