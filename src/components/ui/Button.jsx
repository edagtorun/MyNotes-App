//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {screenHeight, screenWidth} from '../../utils/constans';

// create a component
const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    top: 10,
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  title: {
    color: Colors.White,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default Button;
