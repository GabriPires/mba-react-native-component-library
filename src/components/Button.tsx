import type { ComponentProps } from 'react'
import { ButtonSpinner, Button as GSButton, Text } from '@gluestack-ui/themed'

type ButtonProps = ComponentProps<typeof GSButton> & {
  title: string
  variant?: 'solid' | 'outline'
  isLoading?: boolean
}

export function Button({
  title,
  variant = 'solid',
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <GSButton
      w="$full"
      h="$14"
      bg={variant === 'outline' ? 'transparent' : '$green700'}
      borderWidth={variant === 'outline' ? '$1' : '$0'}
      borderColor="$green500"
      rounded="$sm"
      disabled={isLoading}
      $active-bg={variant === 'outline' ? '$gray500' : '$green500'}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color={variant === 'outline' ? '$green500' : '$white'}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      )}
    </GSButton>
  )
}
