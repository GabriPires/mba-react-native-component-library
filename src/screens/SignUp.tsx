import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView,
} from '@gluestack-ui/themed'

import BackgroundImage from '@/assets/background.png'
import Logo from '@/assets/logo.svg'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { useNavigation } from '@react-navigation/native'
import type { AuthNavigatorRoutesProps } from '@/routes/auth.routes'

export function SignUp() {
  const { goBack } = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoBack() {
    goBack()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImage}
          defaultSource={BackgroundImage}
          alt="Pessoas treinando"
          w="$full"
          h={624}
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />

            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Cria sua conta</Heading>

            <Input placeholder="Seu nome" />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input placeholder="Senha" secureTextEntry />
            <Button title="Criar e acessar" />
          </Center>

          <Button
            variant="outline"
            title="Voltar para o login"
            mt="$12"
            onPress={handleGoBack}
          />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
