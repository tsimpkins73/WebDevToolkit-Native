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
            resourceType:''
        };
    }

 /* These functions are to retrieve data from the API and fill the state */  
    getResourcesForTypes = (typeID) => {
        fetch(`${API_BASE_URL}/resources/byType/${typeID}`)
            .then(response => response.json())
            .then((typeResources) => { this.setState({ typeResources }); });
    }



/* These functions are what to run when the component mounts and when it receives new props */        
    componentDidMount() {
        let resourceType = this.props.resourceType;
        if (this.props.favoriteResources) {
            this.setState({ typeResources: this.props.favoriteResources,
            resourceType:"Favorites" })
        }
        if (this.props.randomResources) {
            this.setState({ typeResources: this.props.randomResources,
            resourceType:"Random" })
        }
        if (this.props.searchTerm) {
            this.setState({ typeResources: this.props.searchResources,
            resourceType:"Results"})
        }
        else {
            this.getResourcesForTypes(resourceType.id);
            this.setState({ resourceType: this.props.resourceType.name })
        }
    };

    componentWillReceiveProps(newProps) {
       
        if(newProps.favoriteResources){
            this.setState({ typeResources: this.props.favoriteResources })
        }else if(newProps.searchResources) {
            if(newProps.searchResources !== this.state.typeResources) {
                this.setState({ typeResources: newProps.searchResources })
            }
            else{
            this.setState({ typeResources: this.props.searchResources })
        }
    }else if (newProps.randomResources) {
        if(newProps.randomResources !== this.state.typeResources) {
            this.setState({ typeResources: newProps.randomResources })
        }
        this.setState({ typeResources: this.props.randomResources,
        resourceType:"Favorites" })
    }
        else if(newProps.resourceType !== this.props.resourceType){
            this.getResourcesForTypes(newProps.resourceType.id);
        }else if(this.props.resourceType){
            this.getResourcesForTypes(this.props.resourceType.id);
        }
        else{
            this.setState({ typeResources: []})
        }

    }

    render(props) {
        let resourceType = this.state.resourceType;
        let typeResources = this.state.typeResources;
        return (
            <section id="resource-full-container">
                <h1 class="resource-section-headline">{resourceType}</h1>
                <section id="resource-component-container">
                    {typeResources.map(function (resource) {
                        return <ResourceTypeView resource={resource}  resourceType={resourceType} handleFavoriteButton={() => this.props.handleFavoriteButton(resource)} />;
                    })}
                </section>
            </section>
        );
    }
}