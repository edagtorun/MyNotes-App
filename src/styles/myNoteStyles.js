import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';
import {screenWidth} from '../utils/constans';

const NoteCardStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.White,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  circleContainer: {
    width: screenWidth * 0.03,
    height: screenWidth * 0.03,
    backgroundColor: Colors.Gray,
    borderRadius: 100,
  },
  circleRead: {
    width: screenWidth * 0.03,
    height: screenWidth * 0.03,
    backgroundColor: Colors.Green,
    borderRadius: 100,
  },
});
export {NoteCardStyle};
