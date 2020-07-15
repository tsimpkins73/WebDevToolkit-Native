import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import LandingPage from '../LandingPage';


it('renders without crashing', () => {

    let resources = [];

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > <LandingPage resources={resources} />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });