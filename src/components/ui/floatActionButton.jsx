//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {screenHeight, screenWidth} from '../../utils/constans';
import {Colors} from '../../theme/colors';
import {Add} from 'iconsax-react-native';

// create a component
const FloatActionButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Add size="50" color={Colors.White} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
  },
});

//make this component available to the app
export default FloatActionButton;
