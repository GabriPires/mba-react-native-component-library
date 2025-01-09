import { Center, Image, Text, VStack } from '@gluestack-ui/themed'

import BackgroundImage from '@/assets/background.png'
import Logo from '@/assets/logo.svg'

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        source={BackgroundImage}
        defaultSource={BackgroundImage}
        alt="Pessoas treinando"
        w="$full"
        h={624}
        position="absolute"
      />
      <Center my="$24">
        <Logo />
        <Text color="$gray100" fontSize="$sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>
    </VStack>
  )
}
