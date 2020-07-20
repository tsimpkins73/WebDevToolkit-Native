import React from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import './css/LandingPage.css'

export default class LandingPage extends React.Component {

  /* This function takes the user to the origin of the resource */
  handleURLButton = (resourceURL) => {
    window.location.href = resourceURL;

  }

  render() {
    let resources = this.props.resources;
    return (
      <section class="LandingContainer">

        <div class="loginFormHeader"><h1 id="dashboardHeaderText">Web Dev Toolkit</h1>
          <p>A Web Dev resource one-stop shop. Videos, tutorials, courses, and online utilities amassed in one convenient location.</p>
          <div id="resourceButtons">
            <Link to="/sign-up"><button>Sign Up</button></Link>
            <Link to="/login"><button>Login</button></Link>
          </div>
        </div>
        <section id="resourceList">
          <div id="lp-resource-component-container" >
            <div id="lp-resource-Full">
              <div id="resourceImage"><img id="previewImage" alt={"Headline for Tutorials"} src={"/images/Tutorials.svg"} /></div>
              <div id="resourceText">
                <h1 id="resourceTypeHeadline">Tutorials</h1>
                <Link to="/dashboard/resource/Tutorials"><button>View Tutorials</button></Link>
              </div>

            </div>

            <div id="lp-resource-Full">
              <div id="resourceImage"><img id="previewImage" alt={"Headline for Courses"} src={"/images/Courses.svg"} /></div>
              <div id="resourceText">
                <h1 id="resourceTypeHeadline">Courses</h1>
                <Link to="/dashboard/resource/Courses"><button>View Courses</button></Link>
              </div>

            </div>

            <div id="lp-resource-Full">
              <div id="lp-resourceImage"><img id="previewImage" alt={"Headline for Videos"} src={"/images/Videos.svg"} /></div>
              <div id="resourceText">
                <h1 id="resourceTypeHeadline">Videos</h1>
                <Link to="/dashboard/resource/Videos"><button>View Videos</button></Link>    </div>

            </div>

            <div id="lp-resource-Full">
              <div id="resourceImage"><img id="previewImage" alt={"Headline for Utilities"} src={"/images/Utilities.svg"} /></div>
              <div id="resourceText">
                <h1 id="resourceTypeHeadline">Utilities</h1>
                <Link to="/dashboard/resource/Utilities"><button>View Utilities</button></Link>
              </div>

            </div>
          </div>
        </section>

      </section>
    );

  }

}
