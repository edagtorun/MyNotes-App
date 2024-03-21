//import liraries
import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/ui/Button';
import {Colors} from '../../theme/colors';
import {getRandomNumber} from '../../utils/functions';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';

// create a component
const AddNote = ({route}) => {
  const navigation = useNavigation();
  const {addNote, updateNote} = useContext(MyContext);
  const {note} = route?.params;
  const {type} = route?.params;
  const [description, setDescription] = useState(note?.description);
  const [title, setTitle] = useState(note?.title);
  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title || description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: description,
        hour: '12.20',
      };
      addNote(form);
      navigation.goBack();
    }
  };
  const onChangeNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title || description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: note.id,
        title: title,
        description: description,
        hour: '12.20',
        read: true,
      };
      updateNote(note.id, form);
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#F1F1F1',
            padding: 10,
          }}>
          <Text style={{fontWeight: '500', fontSize: 16, marginLeft: 10}}>
            Title
          </Text>
          <TextInput
            placeholder="Enter your note... "
            value={title}
            style={styles.input}
            onChangeText={text => setTitle(text)}
            // value={text}
          />
          {titleRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginVertical: 16,
                marginHorizontal: 10,
                color: 'red',
              }}>
              Please Enter Note Details !
            </Text>
          )}
          <Text style={{fontWeight: '500', fontSize: 16, marginLeft: 10}}>
            Description
          </Text>
          <TextInput
            placeholder="Enter your note... "
            value={description}
            style={styles.input1}
            onChangeText={text => setDescription(text)}
            // value={text}
          />
          {descriptionRequired && (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                marginVertical: 16,
                marginHorizontal: 10,
                color: 'red',
              }}>
              Please Enter Note Details !
            </Text>
          )}
        </View>

        <View>
          <Button
            onPress={type == 'update' ? onChangeNote : saveNote}
            title={type == 'update' ? 'UPDATE' : 'SAVE'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    height: 50,
    margin: 8,
    padding: 5,
    borderRadius: 5,
    borderColor: Colors.Gray,
  },
  input1: {
    borderWidth: 1,
    backgroundColor: 'white',
    height: 150,
    margin: 8,
    padding: 5,
    borderRadius: 5,
    borderColor: Colors.Gray,
  },
});

//make this component available to the app
export default AddNote;
