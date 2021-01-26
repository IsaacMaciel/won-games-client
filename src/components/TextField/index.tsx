import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: JSX.Element
  iconPosition?: 'right' | 'left'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  icon,
  iconPosition = 'left',
  labelFor = '',
  initialValue = '',
  disabled = false,
  error = '',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper error={error} disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          disabled={disabled}
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Wrapper>
  )
}

export default TextField
