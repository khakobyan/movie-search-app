import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MAListItem } from 'src/components/list/item';
import { SCREENS } from '@utils';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockedNavigate,
  }),
}));

describe('MAListItem component', () => {
  const item = {
    title: 'Test Movie',
    img_poster: 'https://example.com/poster.jpg',
    actors: 'Actor 1, Actor 2',
    year: 2022,
    rank: 4.5,
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<MAListItem item={item} index={0} />);
    
    const titleText = getByText(item.title);
    const castText = getByText(`Casts: ${item.actors}`);
    const yearText = getByText(`Year: ${item.year}`);
    const rankText = getByText(`Rank: ${item.rank}`);
    const image = getByTestId('movie-image');

    expect(titleText).toBeDefined();
    expect(castText).toBeDefined();
    expect(yearText).toBeDefined();
    expect(rankText).toBeDefined();
    expect(image).toBeDefined();
  });

  it('navigates to movie screen on press', () => {
    const { getByTestId } = render(<MAListItem item={item} index={0} />);

    const touchable = getByTestId('movie-touchable');
    fireEvent.press(touchable);

    expect(mockedNavigate).toHaveBeenCalledWith(SCREENS.MOVIE, { index: 0 });
  });
});
