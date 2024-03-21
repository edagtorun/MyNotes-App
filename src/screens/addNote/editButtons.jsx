//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {
  TextBold,
  TextItalic,
  TextUnderline,
  TextalignLeft,
  TextalignCenter,
  TextalignRight,
} from 'iconsax-react-native';

// create a component
const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="25" color={Colors.Secondary} variant="Outline" />,
    },
    {
      id: 2,
      value: 'italic',
      icon: <TextItalic size="25" color={Colors.Secondary} variant="Outline" />,
    },
    {
      id: 3,
      value: 'textUnderline',
      icon: (
        <TextUnderline size="25" color={Colors.Secondary} variant="Outline" />
      ),
    },
    {
      id: 4,
      value: 'left',
      icon: (
        <TextalignLeft size="25" color={Colors.Secondary} variant="Outline" />
      ),
    },
    {
      id: 5,
      value: 'center',
      icon: (
        <TextalignCenter size="25" color={Colors.Secondary} variant="Outline" />
      ),
    },
    {
      id: 6,
      value: 'right',
      icon: (
        <TextalignRight size="25" color={Colors.Secondary} variant="Outline" />
      ),
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity
          onPress={() => onChangeStyle(item.value)}
          key={item.id}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ScreenColor,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderRadius: 3,
    borderWidth: 0.3,
    top: 25,
  },
  // container: {
  //   backgroundColor: Colors.ScreenColor,
  //   flexDirection: 'row',
  //   padding: 10,
  //   justifyContent: 'space-between',
  //   margin: 10,
  //
  //   borderColor: Colors.Gray,
  //
  // },
});

//make this component available to the app
export default EditButtons;
