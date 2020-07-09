import { Button } from 'react-native'
import * as React from 'react'

import Box from '../components/box'
import { LogoWhite } from '../components/icons'
import Search from '../components/search'

function SearchView({ navigation }) {
  return (
    <Box>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('Details')}
      />
      <Box>
        <LogoWhite color="purple" />
      </Box>

      <Box p={8}>
        <Search />
      </Box>
    </Box>
  )
}

export default SearchView
