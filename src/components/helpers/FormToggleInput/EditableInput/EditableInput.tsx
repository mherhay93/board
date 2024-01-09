import {FC} from "react";
import editIcon from '../../../../assets/icons/icons-edit.svg'
import styles from './editableInput.module.css'

interface IProps {
    value:string;
    labelName: string;
    onEdit: (v: boolean) => void
}
const EditableInput:FC<IProps> = ({value, labelName, onEdit}) => {
    return (
        <div className={styles.container}>
            <span>{labelName}</span>
            <span>{value} sm</span>
            <img onClick={() => onEdit(true)} className={styles.icon} src={editIcon} alt='edit'/>
        </div>
    )
}

export default EditableInput;
