import type { ComponentProps } from 'react'
import { ButtonSpinner, Button as GSButton, Text } from '@gluestack-ui/themed'

type ButtonProps = ComponentProps<typeof GSButton> & {
  title: string
  isLoading?: boolean
}

export function Button({ title, isLoading = false, ...props }: ButtonProps) {
  return (
    <GSButton
      w="$full"
      h="$14"
      bg="$green700"
      borderWidth="$0"
      borderColor="$green500"
      rounded="$sm"
      disabled={isLoading}
      $active-bg="$green500"
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text color="$white" fontFamily="$heading" fontSize="$sm">
          {title}
        </Text>
      )}
    </GSButton>
  )
}
