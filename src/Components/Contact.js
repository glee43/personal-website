import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              method="POST"
              action="https://formspree.io/george_lee@brown.edu"
            >
              <label htmlFor="contactName">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                defaultValue=""
                size="35"
                id="contactName"
                name="name"
              />

              <label htmlFor="contactEmail">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                defaultValue=""
                size="35"
                id="contactEmail"
                name="email"
              />

              <label htmlFor="contactSubject">Subject</label>
              <input
                type="text"
                defaultValue=""
                size="35"
                id="contactSubject"
                name="contactSubject"
              />

              <label htmlFor="contactMessage">
                Message <span className="required">*</span>
              </label>
              <textarea
                cols="50"
                rows="15"
                id="contactMessage"
                name="message"
              />

              <button className="submit" type="submit">
                Submit
              </button>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check" />
              Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Email and Phone</h4>
              <p className="address">
                {name}
                <br />
                {email} <br />
                <span>{phone}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
