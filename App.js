import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/stackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
