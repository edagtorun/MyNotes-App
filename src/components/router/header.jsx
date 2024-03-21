//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenWidth, screenHeight} from '../../utils/constans';
import {MYNOTES} from '../../utils/routes';
import {Colors} from '../../theme/colors';
import {HambergerMenu, SearchNormal1, More} from 'iconsax-react-native';
// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{fontSize: 40, color: Colors.Secondary}}>{MYNOTES}</Text>
      </View>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            padding: 5,
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <HambergerMenu size="30" color={Colors.Secondary} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 10,
            flex: 1,
          }}>
          <SearchNormal1 size="25" color={Colors.Secondary} />
          <More
            size="25"
            color={Colors.Secondary}
            style={{transform: [{rotate: '90deg'}]}}
          />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: screenHeight * 0.2,
    margin: 10,
  },
});

//make this component available to the app
export default Header;
