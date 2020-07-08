import {View, Button} from 'react-native';
import * as React from 'react';

function SearchView({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default SearchView;
