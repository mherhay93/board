import {FC, useState} from "react";
import Input from "./Input/Input";
import EditableInput from "./EditableInput/EditableInput";
import styles from './formToggleInput.module.css'

interface IProps {
    labelName: string,
    value: string,
    onChange: (v: string, k: string) => void,
}

const FormToggleInput: FC<IProps> = ({labelName, value, onChange}) => {
    const [isEdit, setIsEdit] = useState<boolean>(true)
    const handleEdit = (val: boolean) => {
        setIsEdit(val)
    }
    return  isEdit ? (
        <Input
            value={value}
            labelName={labelName}
            onConfirm={handleEdit}
            onChange={onChange}
        />
    ) : (
        <EditableInput
            value={value}
            labelName={labelName}
            onEdit={handleEdit}
        />
    )
}

export default FormToggleInput;
