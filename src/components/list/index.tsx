import React from 'react';
import { FlatList, Text } from 'react-native';
import { MAListItem } from './item';
import styles from './styles';
import { Movie } from 'src/redux/movies/types';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

interface MAListProps {
  data: Movie[];
  loading: boolean;
}

const renderEmptyComponent = () => (
  <Text style={styles.emptyText}>
    There are no movies matching the search criteria. Please try again!
  </Text>
);

const ListItemSkeleton = () => (
  <>
    {[...Array(6)].map((_, index) => (
      <SkeletonPlaceholder key={index} borderRadius={4}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginVertical={20}>
          <SkeletonPlaceholder.Item width={80} height={80} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width={300} height={30} />
            <SkeletonPlaceholder.Item marginTop={20} width={1200} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    ))}
  </>
);

export const MAList: React.FC<MAListProps> = ({ data, loading }) => {
  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <MAListItem item={item} index={index} />
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={loading ? Array.from(Array(6).keys()) : data}
      renderItem={loading ? ListItemSkeleton : renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => '#' + item?.title + index}
      ListEmptyComponent={renderEmptyComponent}
      onEndReachedThreshold={0.2}
      maxToRenderPerBatch={6}
      testID={loading ? 'list-skeleton' : 'ma-list'} 
    />
  );
};
