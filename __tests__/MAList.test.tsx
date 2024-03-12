import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { MAList } from 'src/components';

describe('MAList component', () => {
  let renderAPI: RenderAPI;

  beforeEach(() => {
    renderAPI = render(<MAList data={[]} loading={false} />);
  });

  it('renders correctly without data', () => {
    const { getByTestId } = renderAPI;
    const list = getByTestId('ma-list');
    expect(list).toBeDefined();
  });

  it('renders loading skeleton when loading is true', () => {
    renderAPI = render(<MAList data={[]} loading={true} />);
    const { getByTestId } = renderAPI;
    const skeleton = getByTestId('list-skeleton');
    expect(skeleton).toBeDefined();
  });

  it('renders empty component when no data is passed', () => {
    const { getByText } = renderAPI;
    const emptyText = getByText(
      'There are no movies matching the search criteria. Please try again!'
    );
    expect(emptyText).toBeDefined();
  });
});
