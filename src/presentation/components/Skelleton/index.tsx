import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

const Skelleton: React.FC = () => {
  return (
    <View style={styles.containerSkelleton}>
      {[1, 2].map(post => (
        <View style={styles.containerPostSkelleton}>
          <View style={styles.imagePostSkelleton} />
          <View style={styles.contentPostSkelleton}>
            <View
              style={[styles.lineComment, styles.lineCommentPostSkelleton]}
            />
            <View
              style={[styles.lineComment, styles.lineCommentPostSkelleton2]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Skelleton;
