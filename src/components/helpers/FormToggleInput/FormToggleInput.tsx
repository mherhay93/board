import {FC, useState} from "react";
import Input from "./Input/Input";
import EditableInput from "./EditableInput/EditableInput";
import styles from './formToggleInput.module.css'

interface IProps {
    isEdit: boolean,
    labelName: string,
    value: string
}
const FormToggleInput:FC<IProps> = ({labelName, value}) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const handleEdit = (val:boolean) => {
      setIsEdit(val)
    }

    return isEdit ?  (
        <Input
            value={value}
            labelName={labelName}
            onConfirm={handleEdit}
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
