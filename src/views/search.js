import {Button} from 'react-native';
import * as React from 'react';

import BoxCenter from '../components/box-center';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Details')}
      />
    </BoxCenter>
  );
}

export default SearchView;
