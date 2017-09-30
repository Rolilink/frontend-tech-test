import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import EmptyMessage from '../EmptyMessage';

const renderMessage = () => <div className="message" />;

expect.addSnapshotSerializer(serializer);

describe('Common.EmptyMessage', () => {
  it('should render children when isEmpty is false', () => {
    const isEmpty = false;
    const children = <div className="children" />;

    const emptyMessage = shallow(
      <EmptyMessage isEmpty={isEmpty} renderMessage={renderMessage}>
        {children}
      </EmptyMessage>,
    );

    expect(emptyMessage).toMatchSnapshot();
  });

  it('should render a message with renderMessage when isEmpty is true', () => {
    const isEmpty = true;
    const children = <div className="children" />;

    const emptyMessage = shallow(
      <EmptyMessage isEmpty={isEmpty} renderMessage={renderMessage}>
        {children}
      </EmptyMessage>,
    );

    expect(emptyMessage).toMatchSnapshot();
  });
});
