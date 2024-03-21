//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Colors} from '../../theme/colors';
import Button from '../../components/ui/Button';

// create a component
const StateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.countWrapper}>
          <Text style={count == 10 ? styles.countSuccess : styles.count}>
            {count}
          </Text>
        </View>
        <View style={styles.buttonWrappper}>
          <Button onPress={() => setCount(count + 1)} title="arttir" />
          <Button onPress={() => setCount(count - 1)} title="azalt" />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  count: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  countSuccess: {
    fontWeight: 'bold',
    fontSize: 100,
    color: Colors.Green,
  },
  countWrapper: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrappper: {
    backgroundColor: Colors.White,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
  },
});

//make this component available to the app
export default StateExample;
