import React from 'react'
import { Route, Link } from "react-router-dom";
import ResourceTypeList from './ResourceTypeList.js'
import ResourceTypePage from './ResourceTypePage.js'
import './css/Dashboard.css'
import TokenService from './services/token-service'

export default class Dashboard extends React.Component {
    
    
    /* This function pertains to logging out */
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.props.clearUser();
    }


    /* This function handles submission of the search form */
    handleSearchSubmit = (e) => {
        this.props.handleSearchForm(e)
        const url = '/dashboard/search/' + e.currentTarget.searchTerm.value;
        this.props.history.push(url);
    }


    render() {
        return (<section id="dashboardContainer">
            <section id="Header"><h1 id="dashboardHeaderText">Web Dev Toolkit</h1>
            <section id="navbar"><Link id='navLink' onClick={this.handleLogoutClick} to='/'>
                Logout
        </Link>
                <Link id='navLink' to='/dashboard'>
                    Home
        </Link>
                <form onSubmit={this.handleSearchSubmit}>
                    <input type="text" className="input" name="searchTerm" placeholder="Search..." />
                    <button className="searchButton" type="submit">Search</button>
                </form>
                <Link id='navLink' to='/dashboard/favorites'>Favorites</ Link>
                <Link id='navLink' to='/dashboard/random'>Random</ Link></section>
            </section>
            <section id="mainContentContainer">
                <Route exact path={'/dashboard'} render={(props) => { return <ResourceTypeList resources={this.props.resources} types={this.props.types} searchTerm={this.props.searchterm} /> }} />
                <Route path={'/dashboard/resource/:type'} render={(props) => {
                    let types = this.props.types;
                    let resourceType = (types.find(a => a.name === props.match.params.type));
                    return <ResourceTypePage resourceType={resourceType} resourceTypeName={resourceType.name} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
                <Route path={'/dashboard/search/:searchterm'} render={(props) => {
                    const searchTerm = props.match.params.searchterm
                    let searchResources = (this.props.resources.filter(resource => resource.summary.indexOf(props.match.params.searchterm) >= 0 || resource.headline.indexOf(props.match.params.searchterm) >= 0));
                    return <ResourceTypePage searchResources={searchResources} searchTerm={searchTerm} resourceTypeName={searchTerm} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
                <Route path={'/dashboard/favorites'} render={(props) => {
                    let resourceType = {name: "Favorites"};
                    let favoriteResources = (this.props.resources.filter(resource => resource.favorite));
                    return <ResourceTypePage favoriteResources={favoriteResources} resourceType={resourceType} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
                 <Route path={'/dashboard/random'} render={(props) => {
                    let resourceType = {name: "Random"};
                    let randomResources = [];
                    for(let i=0; i<10; i++){
                        const randomNumber = Math.floor(Math.random()* (this.props.resources.length))
                        randomResources.push(this.props.resources[randomNumber])
                    }
                    console.log(randomResources)
                    return <ResourceTypePage randomResources={randomResources} resourceType={resourceType} handleFavoriteButton={this.props.handleFavoriteButton} />
                }} />
            </section>
        </section>
        );
    }
}
