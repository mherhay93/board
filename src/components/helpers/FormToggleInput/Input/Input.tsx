import {FC} from "react"
import okIcon from '../../../../assets/icons/icons-ok.svg'
import styles from './input.module.css'

interface IProps {
    labelName: string;
    value: string;
    onConfirm: (v:boolean) => void;
    onChange: (v:string, k:string) => void;
}
const Input:FC<IProps> = ({labelName, value, onConfirm, onChange}) => {
    const unit = labelName !== 'Count' ? 'sm' : ''
    return (
        <label className={styles.container}>
            <span className={styles.labelName}>{labelName}</span>
            <input onChange={(e) => onChange(e.target.value, labelName.toLowerCase())} value={value}/>
            <span>{unit}</span>
            <img onClick={() => onConfirm(false)} className={styles.icon} alt={'ok'} src={okIcon}/>
        </label>
    )
}

export default Input;
