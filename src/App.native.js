import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './LandingPage.js'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import Dashboard from './Dashboard.js'
import { API_BASE_URL } from './config'
import { Text, ScrollView, StyleSheet } from 'react-native';
require('dotenv').config();

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      resources: [],
      types: [],
      resourcesForTypes: [],
      typeResources: [],
      searchterm: '',
      searchResources: [],
      currentUser: {},
      users: [],
    };
  }

  /* APP STATE ADJUSTING FUNCTIONS */

  /* These functions are all button handlers */

  handleFavoriteButton = (article) => {
    article.favorite = !article.favorite;
    this.setState({
      articles: this.state.articles
    });
  }

  handleSearchForm = (event) => {
    event.preventDefault();
    const term = event.currentTarget.searchTerm.value;
    this.setState({
      searchterm: term
    });
  }


/* These functions pertain to logging in and out */
  clearUser = () => {
    this.setState({ currentUser: {} });
    localStorage["user"] = 'null';
  }

  onLoginSuccess = (username) => {
    fetch(`${API_BASE_URL}/users/${username}`)
      .then(response => response.json())
      .then((currentUser) => {
        this.setState({ currentUser });
        localStorage["user"] = JSON.stringify(currentUser)
      });
  }


 /* These functions are to retrieve data from the API and fill the state */  
  getResources() {
    fetch(`${API_BASE_URL}/resources`)
      .then(response => response.json())
      .then((resources) => { this.setState({ resources }); });
  }
  getTypes() {
    fetch(`${API_BASE_URL}/types`)
      .then(response => response.json())
      .then((types) => { this.setState({ types }); });
  }

  getUsers() {
    fetch(`${API_BASE_URL}/users`)
      .then(response => response.json())
      .then((users) => { this.setState({ users }); });
  }

  componentDidMount() {
    this.getResources();
    this.getTypes();
    this.getUsers();
    if (localStorage["user"]) {
      const user = JSON.parse(localStorage["user"]);
      this.setState({ currentUser: user });
    }
  }

  render() {
    let types = this.state.types;
    return (
      <ScrollView className='App'>
        <BrowserRouter>
          <Route exact path={'/'} render={(props) => <LandingPage {...props} resources={this.state.resources} types={types} handleFavoriteButton={this.handleFavoriteButton} clearUser={this.clearUser} currentresource={this.state.currentArticle} />} />
          <Route path={'/login'} render={(props) => <LoginForm onLoginSuccess={this.onLoginSuccess} {...props} />} />
          <Route path={'/sign-up'} component={SignUpForm} />
          <Route path={'/dashboard'} render={(props) => <Dashboard {...props} handleArticleButton={this.handleArticleButton} users={this.state.users} resources={this.state.resources} types={types} searchterm={this.state.searchterm} currentUser={this.state.currentUser} types={this.state.types} handleSearchForm={this.handleSearchForm} handleFavoriteButton={this.handleFavoriteButton} clearUser={this.clearUser} currentresource={this.state.currentArticle} />} />
        </BrowserRouter>
      </ScrollView>
    );
  }
}
