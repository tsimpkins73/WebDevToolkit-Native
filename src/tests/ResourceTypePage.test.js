import React from 'react';


import ReactDOM from 'react-dom';

import {BrowserRouter } from 'react-router-dom';
import ResourceTypePage from '../ResourceTypePage';


it('renders without crashing', () => {
    let resourceType = {};
    let typeResources = [];
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ResourceTypePage resourceType={resourceType} typeResources={typeResources} /></BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
});