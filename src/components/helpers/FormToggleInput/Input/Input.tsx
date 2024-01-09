import {FC} from "react"
import okIcon from '../../../../assets/icons/icons-ok.svg'
import styles from './input.module.css'

interface IProps {
    labelName: string;
    value: string;
    onConfirm: (v:boolean) => void
}
const Input:FC<IProps> = ({labelName, value, onConfirm}) => {
    return (
        <label className={styles.container}>
            <span>{labelName}</span>
            <input value={value}/>
            <span>sm</span>
            <img onClick={() => onConfirm(false)} className={styles.icon} alt={'ok'} src={okIcon}/>
        </label>
    )
}

export default Input;
