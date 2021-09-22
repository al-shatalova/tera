import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.blue}>
        Новости
      </Text>
      <Image style={styles.logo} source={require('../assets/card.jpg')} />
      <Text style={styles.paragraph}>
        Лучшие мини-сериалы для отпускных вечеров
      </Text>
      <Text style={styles.maintext}>
        Часто сериалы ассоциируются у нас с долгой историей или циклом историй. Но сейчас также в моде мини-сериалы, которые можно посмотреть полностью всего лишь за один день. Мы собрали для вас лучшие из них, чтобы вы могли насладиться захватывающей историей в отпуске.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  maintext: {
    margin: 24,
    marginTop: 0,
    fontSize: 16,
  },
  logo: {
    height: 128,
    width: 250,
    marginLeft: 20,
  },
  blue: {
    color: 'blue',
    margin: 24,
    marginBottom: 40,
  },
});
