import GameSlider from 'components/GameSlider'
import Heading, { HeadingProps } from 'components/Heading'
import { GameCardProps } from 'components/Gamecard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

const Showcase = ({
  title,
  highlight,
  games
}: ShowcaseProps & Omit<HeadingProps, 'children'>) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameSlider items={games} />}
  </S.Wrapper>
)

export default Showcase
