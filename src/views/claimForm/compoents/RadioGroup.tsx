import { Radio, RadioGroupProps } from 'antd';

interface Item {
    label: string;
    value: string;
}
interface IProps extends RadioGroupProps {
    options: Array<Item>;
}

export default function RadioGroup(props: IProps) {    
  
    return (
        <Radio.Group {...props}>
            {props.options?.map(each => (
                <Radio key={each.label} value={each.value} >{each.label}</Radio>
            ))}
        </Radio.Group>
    );
}
