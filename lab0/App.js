import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
</style>

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.paragraph}>
          Hello, world!
        </Text>
        <Image
          source={{
            uri: 'https://i.ibb.co/kXX26ys/hello-PNG45.png',
          }}
          style={{ width: 210, height: 120, alignSelf: "center", marginBottom: 20 }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontFamily: 'Lato',
    margin: 50,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#6E69D6',
  },
});
