import * as React from 'react'import { StatusBar, ScrollView } from 'react-native'import { useFocusEffect } from '@react-navigation/native'import SafeAreaView from 'react-native-safe-area-view'import Box from '../components/box'import Text from '../components/text'import { IconFav, IconHand, IconVoice } from '../components/icons'import ActionButton, { ActionButtonTitle } from '../components/action-button'import theme from '../utils/theme'import DetailSummaryItem from '../components/detail-summary-item'import LoaderText from '../components/loader-text'function SearchDetailView({ route }) {  const [isData, setData] = React.useState(null)  //const keyword = route.params?.title  const keyword = 'kirli'  const getDetailData = async () => {    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`)    const data = await response.json()    setData(data[0])  }  React.useEffect(() => {    getDetailData()  }, [])  useFocusEffect(    React.useCallback(() => {      StatusBar.setBarStyle('dark-content')    }, [])  )  return (    <Box as={SafeAreaView} bg="softRed" flex={1}>      <Box as={ScrollView} p={16}>        <Box>          <Text fontSize={32} fontWeight="bold">            {keyword}          </Text>          {isData?.telaffuz || isData?.lisan ? (            <Text color="textLight" mt={6}>              {isData?.telaffuz}              {isData?.lisan}            </Text>          ) : null}        </Box>        <Box flexDirection="row" mt={24}>          <ActionButton disabled={!isData}>            <IconVoice width={24} height={24} color={theme.colors.textLight} />          </ActionButton>          <ActionButton disabled={!isData} ml={12}>            <IconFav color={theme.colors.textLight} />          </ActionButton>          <ActionButton disabled={!isData} ml="auto">            <IconHand color={theme.colors.textLight} />            <ActionButtonTitle>Türk Dil İşareti</ActionButtonTitle>          </ActionButton>        </Box>        <Box mt={32}>          {isData            ? isData.anlamlarListe.map((item) => (                <DetailSummaryItem data={item} />              ))            : [1, 2, 3].map((index) => (                <DetailSummaryItem key={index} border={index !== 1}>                  <LoaderText />                  <LoaderText width={200} mt={10} />                </DetailSummaryItem>              ))}        </Box>      </Box>    </Box>  )}export default SearchDetailView