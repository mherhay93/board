import {FC} from "react";
import styles from './input.module.css'

interface IProps {
    labelName: string
    value: string
}
const Input:FC<IProps> = ({labelName, value}) => {
    return (
        <label className={styles.container}>
            <span>{labelName}</span>
            <input value={`${value} sm`}/>
        </label>
    )
}

export default Input;
