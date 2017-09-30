import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import Title from '../Title';

expect.addSnapshotSerializer(serializer);
const text = 'the title';

describe('Common.Tittle', () => {
  it('should render with props', () => {
    const title = shallow(<Title>{text}</Title>);

    expect(title).toMatchSnapshot();
  });
});
