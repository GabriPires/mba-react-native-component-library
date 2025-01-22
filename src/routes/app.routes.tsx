import { Exercise } from '@/screens/Exercise'
import { History } from '@/screens/History'
import { Home } from '@/screens/Home'
import { Profile } from '@/screens/Profile'
import {
  createBottomTabNavigator,
  type BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

type AppRoutes = {
  home: undefined
  exercise: undefined
  history: undefined
  profile: undefined
}

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="history" component={History} />
      <Screen name="profile" component={Profile} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  )
}
