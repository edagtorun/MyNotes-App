//import liraries
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Alert,
} from 'react-native';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

// create a component
const MyNotes = ({navigation}) => {
  const {note, updateNote, deleteNote} = useContext(MyContext);

  let note1 = {
    id: 6,
    title: 'Product Manager',
    description:
      'Innovative product manager driving product development and strategy at Apple.',
    hour: '3:00 pm',
  };

  let note2 = {
    id: 5,
    title: 'Human Resources Specialist',
    description:
      'Strategic human resources specialist skilled in recruitment and employee relations at Amazon.',
    hour: '1:45 pm',
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FlatList
          data={note}
          renderItem={({item}) => (
            <NoteCard
              item={item}
              navigation={navigation}
              deleteItem={item => deleteNote(item.id)}
              updateItem={item => updateNote(item.id, note1)}
            />
          )}
          keyExtractor={item => item.id}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default MyNotes;
