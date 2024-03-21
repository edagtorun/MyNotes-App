import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNOTE,
  MYNOTES,
  NOTEDETAIL,
  SECONDSCREEN,
  STATEXAMPLE,
  USEFFECTEXAMPLE,
} from '../utils/routes';
import myNotes from '../screens/myNotes';
import NoteDetail from '../screens/noteDetail';
import AddNote from '../screens/addNote';
import {Colors} from '../theme/colors';
import HeaderRight from '../components/ui/headerRight';
import {ArrowLeft} from 'iconsax-react-native';
import StateExample from '../screens/stateExample';
import UseEffectExample from '../screens/useEffectExample';
import SecondScreen from '../screens/useEffectExample/secondScreen';

const Stack = createNativeStackNavigator();

const CustomHeaderBackButton = ({navigation}) => {
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <ArrowLeft
      onPress={handlePress} // Geri butonuna basıldığında onPress olayını tetikleyecek
      size={30}
      color={Colors.Primary}
      style={{marginLeft: 10}} // İkona sol boşluk ekleyebilirsiniz
    />
  );
};

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: Colors.Primary,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={myNotes}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={USEFFECTEXAMPLE}
        component={UseEffectExample}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name={SECONDSCREEN}
        component={SecondScreen}
      />

      <Stack.Screen
        options={{headerShown: true}}
        name={STATEXAMPLE}
        component={StateExample}
      />

      <Stack.Screen
        options={({navigation}) => ({
          headerRight: props => <HeaderRight />,
          headerLeft: () => <CustomHeaderBackButton navigation={navigation} />, // Özel geri butonunu tanıtın
          headerTitle: '',
        })}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerTitle: '',
          headerLeft: () => <CustomHeaderBackButton navigation={navigation} />,
        })}
        name={NOTEDETAIL}
        component={NoteDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
