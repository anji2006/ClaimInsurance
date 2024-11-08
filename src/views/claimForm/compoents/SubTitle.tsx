import { Flex , Typography} from 'antd'

const {Title} = Typography;

interface IProps {
    title: string;
    className: string;
    level?: 1 | 2 | 3 | 4 | 5;
}


export default function SubTitle({title, className="", level} : IProps) {
  return (
    <Flex justify='center'>
        <Title className={className} level={level ? level : 4} >{title}</Title>
    </Flex>
  )
}
