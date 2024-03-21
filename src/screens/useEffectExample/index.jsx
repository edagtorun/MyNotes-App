//import liraries
import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Colors} from '../../theme/colors';
import Button from '../../components/ui/Button';
import {SECONDSCREEN} from '../../utils/routes';
import MyContext from '../../context';

// create a component
const UseEffectExample = ({navigation}) => {
  const {count, changeCount} = useContext(MyContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{flex: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.count}>{count}</Text>
          <Text>First Page</Text>
        </View>
        <View style={{flex: 1}}>
          <Button
            onPress={() => navigation.navigate(SECONDSCREEN, {count: count})}
            title="Home"
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
    backgroundColor: Colors.White,
  },
  count: {
    fontSize: 100,
    fontWeight: 'bold',
    color: Colors.Green,
  },
});

//make this component available to the app
export default UseEffectExample;
