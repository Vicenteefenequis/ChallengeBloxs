import {StyleSheet} from 'react-native';
import globalColors from '../../styles/globalColors';

export const styles = StyleSheet.create({
  containerContent: {
    flex: 1,
    backgroundColor: globalColors.primaryColor,
  },
  containerFilter: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,

    borderRadius: 5,
    marginLeft: 10,
  },
  containerFilterSelected: {
    backgroundColor: globalColors.yellow,
  },
  containerFilterUnSelected: {
    backgroundColor: globalColors.dark,
  },
  textFilter: {
    textTransform: 'uppercase',
  },
  textFilterSelected: {
    color: globalColors.primaryColor,
  },
  textFilterUnSelected: {
    color: globalColors.white,
  },
  scrollViewContainerFilter: {
    marginTop: 15,
  },
  scrolViewContainerPost: {
    flex: 1,
    marginTop: 16,
  },
  containerPost: {
    margin: 10,
    backgroundColor: globalColors.dark,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imagePost: {
    height: 190,
  },
  textPost: {
    fontSize: 18,
    color: globalColors.white,
    margin: 16,
  },
});
