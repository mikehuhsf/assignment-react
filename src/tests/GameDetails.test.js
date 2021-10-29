import React from 'react';
import renderer from 'react-test-renderer';
import GameDetails from '../components/GameDetails';
import { platforms } from '../tools/mockData';


it("display's platform support when it exists", () => {

    const wrapper = renderer.crate(<GameDetails release_date='010101' platforms={platforms} />)
    expect(wrapper).toMatchSnapshot();
    
})