import { StatusBar } from 'react-native'
import {
  Roboto_700Bold,
  Roboto_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto'
import { Center, GluestackUIProvider, Text } from '@gluestack-ui/themed'
import { config } from './config/gluestack-ui.config'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? (
        <Center flex={1} bg="$gray700">
          <Text color="white" fontSize={24}>
            Hello World!
          </Text>
        </Center>
      ) : (
        <Text>Loading...</Text>
      )}
    </GluestackUIProvider>
  )
}
