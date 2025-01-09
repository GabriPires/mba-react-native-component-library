import { Input as GSInput, InputField } from '@gluestack-ui/themed'
import type { ComponentProps } from 'react'

type InputProps = ComponentProps<typeof InputField>

export function Input(props: InputProps) {
  return (
    <GSInput bg="$gray700" h="$14" px="$4" borderWidth="$0" borderRadius="$md">
      <InputField
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        {...props}
      />
    </GSInput>
  )
}
