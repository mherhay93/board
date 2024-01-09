import {FC} from "react";
import Input from "./Input/Input";
import EditableInput from "./EditableInput/EditableInput";
import styles from './formToggleInput.module.css'

interface IProps {
    isEdit: boolean,
    labelName: string,
    value: string
}
const FormToggleInput:FC<IProps> = ({isEdit, labelName, value}) => {
    
    return isEdit ?  (
        <Input
            value={value}
            labelName={labelName}
        />
    ) : (
        <EditableInput
            value={value}
            labelName={labelName}
        />
    )
}

export default FormToggleInput;
