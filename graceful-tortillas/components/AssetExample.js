import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.news}>
        Новости
      </Text>
      <Image style={styles.logo} source={require('../assets/bright.png')} />
      <Text style={styles.paragraph}>
        Превращаем просмотр кино во что то интересное
      </Text>
      <Text style={styles.textnews}>
        Бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла 
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    padding: 34,
  },
  paragraph: {
    
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',   
  },
  textnews: {   
    marginTop: 10,
    fontSize: 14,   
  },
  news: {
    marginBottom: 24,
    fontSize: 14,   
    color: 'blue'
  },
  logo: {
    marginRight: 40,
    height: 120,
    width: 220,
  }
});
