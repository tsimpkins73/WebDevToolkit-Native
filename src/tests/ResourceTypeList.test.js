import React from 'react';


import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ResourceTypeList from '../ResourceTypeList';


it('renders without crashing', () => {

      let resources = [];
      let types = []
       
      const div = document.createElement('div');
      ReactDOM.render( < BrowserRouter > < ResourceTypeList resources = {
          resources
        }
        types = {
          types
        }
        />
        </BrowserRouter>, div);


        ReactDOM.unmountComponentAtNode(div);
      });