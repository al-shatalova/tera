import React from 'react';
import { Text, View, Button} from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
        <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
          5 книжных новинок октября
        </Text>
      </View>
      <View style={{ flex: 2, backgroundColor: '#DEE0E6' }}>
        <Text style = {{fontSize: 20, textAlign: 'center', marginTop: 20}}>
          Тралалала лал лаллаллал лал лал лаллал лал лаллаллал лал лал лаллал лал лаллаллал лал лал  лаллал лал лаллаллал лал лал лаллал
        </Text>
      </View>
      <View style={{ flex: 4, backgroundColor: '#A6A7AB' }}>
        <Text style = {{fontSize: 14, textAlign: 'center', marginTop: 20}}>
          Тралалала лал лаллаллал лал лал лаллал лал лаллаллал лал лал лаллал лал лаллаллал лал лал  лаллал лал лаллаллал лал лал лаллал лаллаллал лал лал лаллал лал лаллаллал лал лал лаллал лал лаллаллал лал лал  лаллал лал лаллаллал лал лал лаллал
        </Text>       
      </View>
      <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center', backgroundColor: '#A6A7AB' }}> 
        <Button
          title="Learn More"
          color="black"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
}

export default YourApp;
