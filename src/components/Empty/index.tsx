import Button from 'components/Button'
import Link from 'next/link'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  haslink?: boolean
}

const Empty = ({ title, description, haslink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt=" A gamer in a couch playing videogame"
      role="image"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {haslink && (
      <Link href="/" passHref>
        <Button as="a"> Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
