import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import ErrorMessage from '../ErrorMessage';

expect.addSnapshotSerializer(serializer);
const renderMessage = () => <div className="message" />;

describe('Common.ErrorMessage', () => {
  it('should render children when error is not passed', () => {
    const children = <div className="children" />;

    const errorMessage = shallow(
      <ErrorMessage renderMessage={renderMessage}>
        {children}
      </ErrorMessage>,
    );

    expect(errorMessage).toMatchSnapshot();
  });

  it('should render a message with renderMessage when there is an error', () => {
    const children = <div className="children" />;

    const errorMessage = shallow(
      <ErrorMessage renderMessage={renderMessage} error="error">
        {children}
      </ErrorMessage>,
    );

    expect(errorMessage).toMatchSnapshot();
  });
});
