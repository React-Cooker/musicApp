import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  SafeAreaView,
  Platform,
  FlatList,
} from 'react-native';
import music_data from './music-data.json';

function App(): React.JSX.Element { //const isDarkMode = useColorScheme() === 'dark'; 
return (
    <SafeAreaView style={[styles.safeArea,{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, },]}>
      <StatusBar  />

      <View style={styles.contentContainer}>
        <FlatList 
        data={music_data}
        renderItem={({item}) => <Text>{item.title}</Text>}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;