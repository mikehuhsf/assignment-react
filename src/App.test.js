import React from 'react';
import App from './App';
import { shallow } from './tools/testSetup';

describe('App container', () => {
  it('should render without any problem', () => {
    const wrapper = shallow(<App name="Cohort Fantastic" />);
    expect(wrapper.find('Provider').length).toBe(1);
  });
});

