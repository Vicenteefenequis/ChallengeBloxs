import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Skelleton from '../../components/Skelleton';
import {useContent} from '../../hooks/useContent';
import {styles} from './styles';

const Content: React.FC = () => {
  const {
    filterSelected,
    setFilterSelected,
    contentList,
    setPage,
    loadingMoreContent,
    setContentList,
  } = useContent();

  const handleChangeFilter = useCallback(
    filter => () => {
      setPage(1);
      setContentList([]);
      setFilterSelected(filter);
    },
    [],
  );

  const loadMoreContent = useCallback(() => {
    setPage(oldPage => {
      return oldPage + 1;
    });
  }, []);

  return (
    <View style={styles.containerContent}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewContainerFilter}>
          {['todos', 'agronegócio', 'energia', 'real State'].map(
            (filter, key) => {
              const [selectedBoxStyle, selectedTextStyle] = selectedStyles(
                filter,
                filterSelected,
              );

              return (
                <TouchableOpacity
                  key={key}
                  onPress={handleChangeFilter(filter)}
                  style={[styles.containerFilter, selectedBoxStyle]}>
                  <Text style={[styles.textFilter, selectedTextStyle]}>
                    {filter}
                  </Text>
                </TouchableOpacity>
              );
            },
          )}
        </ScrollView>
      </View>
      <FlatList
        contentContainerStyle={{paddingBottom: 32}}
        style={styles.scrolViewContainerPost}
        keyExtractor={(_, index) => index.toString()}
        data={contentList}
        onEndReached={loadMoreContent}
        ListEmptyComponent={<Skelleton />}
        ListFooterComponent={<ListFooterComponent {...{loadingMoreContent}} />}
        renderItem={({item}) => (
          <View style={styles.containerPost}>
            <Image
              style={styles.imagePost}
              source={{
                uri: item.photo_url,
              }}
            />
            <Text style={styles.textPost}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Content;

type ListFooter = {
  loadingMoreContent: boolean;
};

const ListFooterComponent = ({loadingMoreContent}: ListFooter) => (
  <View>
    {loadingMoreContent ? <ActivityIndicator size="large" /> : <View />}
  </View>
);

function selectedStyles(
  currentFilter: string,
  selectedFilter: string,
): [ViewStyle, TextStyle] {
  if (currentFilter === selectedFilter) {
    return [styles.containerFilterSelected, styles.textFilterSelected];
  }

  return [styles.containerFilterUnSelected, styles.textFilterUnSelected];
}
