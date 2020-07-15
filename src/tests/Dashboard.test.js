import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';


it.only('renders without crashing', () => {
        shallow(<Dashboard />);
      });