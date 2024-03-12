import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MAButton } from 'src/components';

describe('MAButton', () => {
  it('renders correctly with title', () => {
    const onPressMock = jest.fn();
    const title = 'Test Button';

    const { getByText } = render(
      <MAButton title={title} onPress={onPressMock} />
    );

    const titleElement = getByText(title);
    expect(titleElement).toBeDefined();
  });

  it('calls onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const title = 'Test Button';

    const { getByText } = render(
      <MAButton title={title} onPress={onPressMock} />
    );

    fireEvent.press(getByText(title));

    expect(onPressMock).toHaveBeenCalled();
  });
});
