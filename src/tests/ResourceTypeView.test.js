import React from 'react';


import ReactDOM from 'react-dom';

import {BrowserRouter } from 'react-router-dom';
import ResourceTypeView from '../ResourceTypeView';


it('renders without crashing', () => {
   let resource = {};
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ResourceTypeView resource={resource} /></BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
});