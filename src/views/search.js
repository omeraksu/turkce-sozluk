import { Button } from 'react-native'
import * as React from 'react'

import BoxCenter from '../components/box-center'
import { LogoWhite } from '../components/icons'

function SearchView({ navigation }) {
  return (
    <BoxCenter bg="birlesikKelimeLight">
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Details')}
      />
      <LogoWhite color="purple" />
    </BoxCenter>
  )
}

export default SearchView
