import { InputNumber, InputProps } from 'antd';
import { useState } from 'react';

import "./Telephony.css"

interface TelNumber {
    area_code: number;
    phone_number: number;
}

export default function Telephony(props: InputProps) {
    
    const {onChange} = props;

    const [number, setNumber] = useState<TelNumber>({
        area_code: 0,
        phone_number: 0,
    })
  
    const onhandleChangeArea = (val: number) =>{
        setNumber({
            ...number,
            area_code: val
        })
        {onChange && onChange(number)};
    }

    const onhandleChangeNumber = (val: number) =>{
        setNumber({
            ...number,
            phone_number: val
        })
        {onChange && onChange(number)};
    }

    return (
        <InputNumber
            addonBefore={<InputNumber onChange={onhandleChangeArea}  controls={false} maxLength={3} style={{width: 90 }}/>}
            onChange={onhandleChangeNumber}
            controls={false}
            maxLength={9}
            style={{width: "100%"}}
        />
    );
}
