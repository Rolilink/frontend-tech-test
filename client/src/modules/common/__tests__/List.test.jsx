import React from 'react';
import { shallow } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import List from '../List';

expect.addSnapshotSerializer(serializer);
const renderListItem = item => <div className="list-item" key={`list-item-${item}`}>{item}</div>;

describe('Common.List', () => {
  it('should call itemRenderer to render items', () => {
    const renderListItemMock = jest.fn(renderListItem);
    const items = [1, 2];
    shallow(<List renderListItem={renderListItemMock} items={items} />);

    expect(renderListItemMock.mock.calls.length).toBe(2);
  });

  it('should render items', () => {
    const items = [1, 2];
    const list = shallow(<List renderListItem={renderListItem} items={items} />);

    expect(list).toMatchSnapshot();
  });

  it('should not render items when empty', () => {
    const items = [];
    const list = shallow(<List renderListItem={renderListItem} items={items} />);

    expect(list).toMatchSnapshot();
  });
});
