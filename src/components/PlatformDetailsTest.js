import React from 'react';
import renderer from 'react-test-renderer';
import PlatformDetails from './PlatformDetails';
import { specifications } from '../tools/mockData';

it('display specificaions info when there is one', () => {

  const wrapper = renderer.create(<PlatformDetails name='iPhone13' release_date='2021-09-24' specifications={specifications}/>);
  expect(wrapper).toMatchSnapshot();
});
