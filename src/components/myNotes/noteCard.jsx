//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {Edit2, Trash} from 'iconsax-react-native';
import {NoteCardStyle} from '../../styles/myNoteStyles';
import {ADDNOTE, NOTEDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import MyContext from '../../context';

// create a component
const NoteCard = ({item, deleteItem, updateItem}) => {
  const {deleteNote} = useContext(MyContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(NOTEDETAIL, {note: item})}
      style={NoteCardStyle.container}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={
            item.read ? NoteCardStyle.circleRead : NoteCardStyle.circleContainer
          }></View>
      </View>
      <View style={{flex: 8}}>
        <Text
          style={{fontSize: 18, fontWeight: 'bold', color: Colors.Secondary}}>
          {item.title}
        </Text>
        <Text style={{fontSize: 14, color: 'gray', marginVertical: 5}}>
          {item.description}
        </Text>
        <Text style={{fontSize: 14, color: Colors.Gray, marginVertical: 5}}>
          {item.hour}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => deleteNote(item.id)}
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Trash size="20" color={Colors.Secondary} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ADDNOTE, {note: item, type: 'update'})
        }
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Edit2 size="20" color={Colors.Primary} variant="Bold" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

//make this component available to the app
export default NoteCard;
