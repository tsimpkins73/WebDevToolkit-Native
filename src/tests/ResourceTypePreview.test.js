import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ResourceTypePreview from '../ResourceTypePreview';


it('renders without crashing', () => {
  let resource= {}
  let resourceType = {name:"test"};
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter> <ResourceTypePreview resourceType={resourceType} resource={resource} /> </BrowserRouter>, div);


  ReactDOM.unmountComponentAtNode(div);
});