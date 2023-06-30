import {useState} from 'react'
import {
  BgCon,
  AppCon,
  Title,
  SubTitle,
  Image,
  Desc,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isReadMore, setReadMore] = useState(false)

  const description = isReadMore
    ? reactHooksDescription
    : reactHooksDescription.slice(0, 170)

  const option = isReadMore ? 'Read Less' : 'Read More'

  const onReadMore = () => {
    setReadMore(prevValue => !prevValue)
  }

  return (
    <BgCon>
      <AppCon>
        <Title>React Hooks</Title>
        <SubTitle>Hooks are a new addition to React</SubTitle>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Desc>{description}</Desc>
        <Button onClick={onReadMore}>{option}</Button>
      </AppCon>
    </BgCon>
  )
}

export default ReadMore
