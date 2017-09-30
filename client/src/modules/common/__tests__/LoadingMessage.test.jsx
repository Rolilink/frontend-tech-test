import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import LoadingMessage from '../LoadingMessage';

expect.addSnapshotSerializer(serializer);
const renderMessage = () => <div className="message" />;

describe('Common.LoadingMessage', () => {
  it('should render children when isLoading prop is false', () => {
    const isLoading = false;
    const children = <div className="children" />;

    const loadingMessage = shallow(
      <LoadingMessage isLoading={isLoading}>
        {children}
      </LoadingMessage>,
    );

    expect(loadingMessage).toMatchSnapshot();
  });

  it('should render a message when isLoading prop is true', () => {
    const isLoading = true;
    const children = <div className="children" />;

    const loadingMessage = shallow(
      <LoadingMessage isLoading={isLoading} renderMessage={renderMessage}>
        {children}
      </LoadingMessage>,
    );

    expect(loadingMessage).toMatchSnapshot();
  });
});
