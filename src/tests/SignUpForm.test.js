import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import SignUpForm from '../SignUpForm';


it('renders without crashing', () => {
    let handleSubmit=[];

      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > <SignUpForm handleSubmit={handleSubmit} />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });