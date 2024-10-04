import { Flex , Typography} from 'antd'

const {Title} = Typography;

interface IProps {
    title: string;
}


export default function SubTitle({title} : IProps) {
  return (
    <Flex justify='center'>
        <Title level={3} >{title}</Title>
    </Flex>
  )
}
