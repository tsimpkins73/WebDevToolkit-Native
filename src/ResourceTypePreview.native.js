import React from 'react'
import './css/ResourceTypeView.css'
import ResourceTypeView from "./ResourceTypeView.js";
import { Link } from 'react-router-dom';
import { API_BASE_URL } from './config'

export default class ResourceTypePreview extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          typeResources: [],
        };
      }

 /* This function are to retrieve data from the API and fill the state */  
    getResourcesForTypes = (typeID) => {
        fetch(`${API_BASE_URL}/resources/byType/${typeID}`)
          .then(response => response.json())
          .then((typeResources) => { this.setState({ typeResources }); });
      }



/* These functions are what to run when the component mounts */              
      componentDidMount() {
      let resourceType = this.props.resourceType;
      this.getResourcesForTypes(resourceType.id);
      }

      

    render(props) {
        let resourceType = this.props.resourceType.name;
        let typeResources = this.state.typeResources;
        return (
            <section id="resource-full-container">
                <h1 class="resource-section-headline">{resourceType}</h1>
                <div id="resource-component-container">
                {typeResources.slice(0, 4).map(function (resource) {
                    return <ResourceTypeView resource={resource} handleFavoriteButton={() => this.props.handleFavoriteButton(resource)} resourceType={resourceType} />;
                })}
                  </div>
                  <Link to={`/dashboard/resource/${resourceType}`}><button id="viewMoreButton">View All</button></Link>
            </section>
        );
    }
}