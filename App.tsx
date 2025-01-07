import { StatusBar, Text, View } from 'react-native'
import {
  Roboto_700Bold,
  Roboto_400Regular,
  useFonts,
} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  })

  return (
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
      {fontsLoaded ? <Text>Hello World!</Text> : <Text>Loading...</Text>}
    </View>
  )
}
