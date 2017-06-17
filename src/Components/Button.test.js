import React from 'react';
import { shallow } from 'enzyme'; // for testing components
import { TouchableHighlight, Text } from 'react-native';

import Button from './Button';

describe('(Component) Button', () => {
  let component;
  let spies;
  const text = 'Refresh';

  beforeEach(() => {
    spies = jest.fn(); // using jest
    component = shallow(<Button onPress={spies} text={text} />);
  });

  it('should exist', () => {
    expect(component.length).toBe(1);
  });

  it('should responded to taps', () => {
    const touchElement = component.find(TouchableHighlight);
    touchElement.simulate('press');

    expect(spies).toHaveBeenCalledTimes(1);
  });

  it('should be have title', () => {
    expect(component.findWhere((n) => {
      return n.is(Text) && n.props().children === text;
    })).toHaveLength(1);
  });

  afterEach(() => {
    component = null;
    spies = null;
  });
});
