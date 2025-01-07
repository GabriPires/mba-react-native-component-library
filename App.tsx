import { StatusBar, View } from 'react-native'
import {
  Roboto_700Bold,
  Roboto_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto'
import { GluestackUIProvider, Text } from '@gluestack-ui/themed'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  return (
    <GluestackUIProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: '#202024',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor={'transparent'}
          translucent
        />
        {fontsLoaded ? (
          <Text color="white" fontSize={24}>
            Hello World!
          </Text>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </GluestackUIProvider>
  )
}
