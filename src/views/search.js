import {Button} from 'react-native';
import * as React from 'react';

import Box from '../components/box';
import BoxCenter from '../components/box-center';

import {TdkIconSearch} from '../components/icons';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Details')}
      />
      <Box size={50} bg="blue" />
      <TdkIconSearch stroke="blue" />
    </BoxCenter>
  );
}

export default SearchView;
