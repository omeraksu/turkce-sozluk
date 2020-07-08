import {Button} from 'react-native';
import * as React from 'react';

import Box from '../components/box';
import BoxCenter from '../components/box-center';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Details')}
      />
      <Box size={50} bg="blue" />
    </BoxCenter>
  );
}

export default SearchView;
