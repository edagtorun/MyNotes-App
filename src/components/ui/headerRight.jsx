//import liraries
import {More, Paperclip, Share} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Paperclip size="25" color={Colors.Secondary} />
      <Share size="25" color={Colors.Secondary} variant="Bulk" />
      <More
        size="25"
        color={Colors.Secondary}
        style={{transform: [{rotate: '90deg'}]}}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
});

//make this component available to the app
export default HeaderRight;
