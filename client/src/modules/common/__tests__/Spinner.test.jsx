import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import Spinner from '../Spinner';

expect.addSnapshotSerializer(serializer);

describe('Common.Spinner', () => {
  it('should render with props', () => {
    const spinner = shallow(<Spinner />);

    expect(spinner).toMatchSnapshot();
  });
});
