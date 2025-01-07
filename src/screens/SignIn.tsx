import { Image, VStack } from '@gluestack-ui/themed'

import BackgroundImage from '@/assets/background.png'

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
    </VStack>
  )
}
