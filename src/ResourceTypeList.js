import React from 'react'
import ResourceTypePreview from "./ResourceTypePreview.js";
import './css/ResourceTypeList.css'

export default class ResourceList extends React.Component {


    render() {
        let types = this.props.types
        let resources= this.props.resources

        if (this.props.searchterm) {
            resources = this.props.resources.filter(resource => resource.text.indexOf(this.props.searchterm) >= 0)
        }
        return (
            <section id="resourceList">
                {types.map(function (resourceType) {
                    return <ResourceTypePreview resourceType={resourceType} resources={resources} />;
                })}
            </section>
        );
    }
}