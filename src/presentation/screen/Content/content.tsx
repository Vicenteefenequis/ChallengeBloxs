import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';

const Content: React.FC = () => {
  return (
    <View style={styles.containerContent}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewContainerFilter}>
          {[1, 2, 3, 4].map(post => {
            const isSelected =
              post === 1
                ? styles.containerFilterSelected
                : styles.containerFilterUnSelected;

            const isSelectedText =
              post === 1
                ? styles.textFilterSelected
                : styles.textFilterUnSelected;

            return (
              <View style={[styles.containerFilter, isSelected]}>
                <Text style={[styles.textFilter, isSelectedText]}>
                  Tudo bem
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
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
    </View>
  );
};

export default Content;
