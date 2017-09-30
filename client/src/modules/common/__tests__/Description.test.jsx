import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import Description from '../Description';

expect.addSnapshotSerializer(serializer);

const text = 'some long description text ?';

describe('Common.Description', () => {
  it('should render with props', () => {
    const description = shallow(<Description>{text}</Description>);

    expect(description).toMatchSnapshot();
  });
});
