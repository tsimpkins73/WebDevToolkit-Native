import React from 'react';


import ReactDOM from 'react-dom';

import {BrowserRouter } from 'react-router-dom';
import ResourceList from '../ResourceList';


it('renders without crashing', () => {
   let resourceType = [{name:"test"}];
   let resource={}
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ResourceList resourceType={resourceType} resource={resource} /></BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
});