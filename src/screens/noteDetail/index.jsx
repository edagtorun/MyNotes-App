//import liraries
import React, {Component, useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {screenStyle} from '../../styles/screenStyle';
import EditButtons from '../addNote/editButtons';
import MyContext from '../../context';

// create a component
const NoteDetail = ({route}) => {
  const {note} = route?.params;
  const {updateNote} = useContext(MyContext);
  const [selectStyle, setSelectStyle] = useState(styles.normal);
  const changeStyleText = style => {
    switch (style) {
      case 'bold':
        setSelectStyle(styles.bold);
        break;
      case 'italic':
        setSelectStyle(styles.italic);
        break;
      case 'textUnderline':
        setSelectStyle(styles.textUnderline);
        break;
      case 'left':
        setSelectStyle(styles.left);
        break;
      case 'center':
        setSelectStyle(styles.center);
        break;
      case 'right':
        setSelectStyle(styles.right);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    updateNote(note.id, note);
    return () => {
      updateNote(note.id, note);
    };
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{bottom: 30}}>
          <EditButtons
            style={{}}
            onChangeStyle={value => changeStyleText(value)}
          />
        </View>
        <View style={{flex: 1, backgroundColor: Colors.White, gap: 20}}>
          <View>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: Colors.Primary}}>
              Title
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: Colors.Secondary,
              }}>
              {note.title}
            </Text>
          </View>
          <View>
            <Text
              style={{fontSize: 30, fontWeight: 'bold', color: Colors.Primary}}>
              Note
            </Text>
            <Text
              style={[
                {
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: Colors.Gray,
                },
                selectStyle,
              ]}>
              {note.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.ScreenColor,
    flex: 1,
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  normal: {},
});

//make this component available to the app
export default NoteDetail;
