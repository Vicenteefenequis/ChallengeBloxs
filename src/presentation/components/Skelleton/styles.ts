import {StyleSheet} from 'react-native';
import globalColors from '../../styles/globalColors';

export const styles = StyleSheet.create({
  containerSkelleton: {
    flex: 1,
  },
  containerPostSkelleton: {
    margin: 10,
    backgroundColor: globalColors.dark,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imagePostSkelleton: {
    backgroundColor: globalColors.grayShimmer,
    height: 200,
  },
  contentPostSkelleton: {
    marginStart: 20,
    justifyContent: 'center',
    height: 90,
  },
  lineComment: {
    borderRadius: 2,
    backgroundColor: globalColors.grayShimmer,
    height: 10,
  },
  lineCommentPostSkelleton: {
    width: '90%',
  },
  lineCommentPostSkelleton2: {
    width: '70%',
    marginTop: 10,
  },
});
