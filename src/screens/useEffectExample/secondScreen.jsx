//import liraries
import React, {useEffect, useState, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';
import Button from '../../components/ui/Button';
import MyContext from '../../context';

// create a component
const SecondScreen = ({route}) => {
  const {count, changeCount} = useContext(MyContext);
  const [text, setText] = useState('second page');
  useEffect(() => {
    // console.log('Mount (sayfa yuklendi');
    setTimeout(() => {
      setText('sayfa yuklendiginde');
    }, 3000);
    return () => {
      setText('UnMount (sayfadan cikis yapildi');
      // console.log('UnMount (sayfadan cikis yapildi');
    };
  }, []);
  useEffect(() => {
    if (count !== 0) setText('sayfa guncellendi');
    // console.log(count);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.text}>{text}</Text>
      <Button onPress={() => changeCount(count + 1)} title="arttir" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
  count: {
    fontSize: 100,
    fontWeight: 'bold',
    color: Colors.Green,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.Primary,
  },
  button: {},
});

//make this component available to the app
export default SecondScreen;
