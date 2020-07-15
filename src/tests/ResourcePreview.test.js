import React from 'react';


import ReactDOM from 'react-dom';

import {BrowserRouter } from 'react-router-dom';
import ResourcePreview from '../ResourcePreview';


it('renders without crashing', () => {
   let resource = {};
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ResourcePreview resource={resource} /></BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
});