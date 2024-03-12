import React from 'react';
import { render } from '@testing-library/react-native';
import { MAContainer } from 'src/components';
import { Text } from 'react-native';

describe('MAContainer component', () => {
  it('renders children correctly', () => {
    const ChildComponent = () => <Text>Test Child</Text>;

    const { getByText } = render(
      <MAContainer>
        <ChildComponent />
      </MAContainer>
    );

    expect(getByText('Test Child')).toBeDefined();
  });
});
