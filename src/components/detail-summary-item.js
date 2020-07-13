import React from 'react'
import Box from './box'
import Text from './text'

export default function DetailSummaryItem({
  data,
  children,
  border,
  ...props
}) {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map((_) => _.tam_adi)) || ['isim']

  const author = (text) => <Text fontWeight="bold">{` - ${text}`}</Text>

  return (
    <Box bg="white" px={20} py={28} {...props}>
      {border && (
        <Box
          position="absolute"
          left={12}
          right={12}
          top={0}
          bg="light"
          height={1}
        />
      )}
      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text color="textLight" ml={-12} mr={5}>
              {data.anlam_sira}
            </Text>
            <Text color="red">{type.join(', ')}</Text>
          </Box>
          <Box>
            <Box mt={8} {...props}>
              <Text fontWeight="bold">{data.anlam}</Text>
            </Box>
            {data.orneklerListe &&
              data.orneklerListe.map((item) => (
                <Box
                  flexDirection="row"
                  ml={10}
                  mt={12}
                  {...props}
                  key={item.anlam_id}
                >
                  <Text color="textLight">
                    {item.ornek}
                    {author(item.yazar && item.yazar[0].tam_adi)}
                  </Text>
                </Box>
              ))}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}
