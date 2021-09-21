import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Skelleton from '../../components/Skelleton';
import {useContent} from '../../hooks/useContent';
import {styles} from './styles';

const Content: React.FC = () => {
  const {filterSelected, loading, setFilterSelected} = useContent();

  return (
    <View style={styles.containerContent}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewContainerFilter}>
          {['todos', 'agronegócio', 'energia', 'real State'].map(
            (filter, key) => {
              const selectedBoxStyle =
                filterSelected === filter
                  ? styles.containerFilterSelected
                  : styles.containerFilterUnSelected;

              const selectedTextStyle =
                filterSelected === filter
                  ? styles.textFilterSelected
                  : styles.textFilterUnSelected;

              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => setFilterSelected(filter)}
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
      {loading ? (
        <ScrollView
          style={styles.scrolViewContainerPost}
          contentContainerStyle={{paddingBottom: 32}}>
          {[1, 2, 3, 4].map(post => (
            <View style={styles.containerPost}>
              <Image
                style={styles.imagePost}
                source={{
                  uri: 'https://silvas.pt/wp-content/uploads/2019/05/DSCF0400.jpg',
                }}
              />
              <Text style={styles.textPost}>
                IPO: oque sua empresa precisa saber antes de abrir o capital
              </Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Skelleton />
      )}
    </View>
  );
};

export default Content;
