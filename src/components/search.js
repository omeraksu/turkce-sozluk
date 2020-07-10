import React, { useState } from 'react'
import { Keyboard } from 'react-native'

import theme from '../utils/theme'
import { IconSearch, IconX } from './icons'

import Box from './box'
import Text from './text'
import Input from './input'
import Button from './button'

function SearchBox({ onChangeFocus }) {
  const [isFocus, setFocus] = useState(false)
  const [value, setValue] = useState('')

  React.useEffect(() => {
    onChangeFocus(isFocus)
  }, [isFocus, onChangeFocus])

  const onCancel = () => {
    setFocus(false)
    Keyboard.dismiss()
  }

  const onClear = () => {
    setValue('')
  }

  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 14,
            shadowOffset: {
              width: 0,
              height: 12
            }
          }}
          bg="white"
          height={52}
          color="textDark"
          borderColor={isFocus && '1px solid red'}
          placeholder="Türkçe sözlükte ara"
          placeholderTextColor="atasozleriDark"
          pl={52}
          borderRadius="normal"
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={(text) => setValue(text)}
        />
        {value.length > 0 && (
          <Button
            onPress={() => onClear()}
            position="absolute"
            right={14}
            top={14}
          >
            <IconX />
          </Button>
        )}
        <Button position="absolute" left={14} top={12}>
          <IconSearch color={theme.colors.textLight} />
        </Button>
      </Box>
      {isFocus && (
        <Button onPress={() => onCancel()} px={15} height={52}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  )
}

export default SearchBox
