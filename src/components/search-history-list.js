import React from 'react'import { FlatList } from 'react-native'import Text from './text'import Box from './box'import { SimpleCardContainer, SimpleCardTitle } from './simple-card'function SearchHistoryList({ data }) {  return (    <>      <FlatList        style={{ padding: 16 }}        data={data}        keyExtractor={(item) => item.id}        renderItem={({ item }) => (          <Box py={6}>            <SimpleCardContainer>              <SimpleCardTitle>{item.title}</SimpleCardTitle>            </SimpleCardContainer>          </Box>        )}        ListHeaderComponent={          <Text mb={10} color="textLight">            SON ARAMALAR          </Text>        }      />    </>  )}export default SearchHistoryList