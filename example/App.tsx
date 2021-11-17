/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Pressable, 
  StyleSheet,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import useStoreReview from './useStoreReview';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {onReview} = useStoreReview()

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Pressable
          testID={'RATE-ME'}
          onPress={onReview}
          style={styles.rateMeBtn}>
          <Text style={styles.rateMeTxt}>Rate More</Text>
        </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rateMeBtn: {
    backgroundColor: '#6E0052',
    alignSelf: 'center',
    padding: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  rateMeTxt: {color: '#fff', fontWeight: 'bold', fontSize: 15},
});
export default App;
