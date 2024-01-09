import {FC} from "react";
import FormToggleInput from "../helpers/FormToggleInput/FormToggleInput";
import styles from './formCard.module.css'

interface IProps {
    isEdit: boolean
}
const FormCard:FC<IProps> = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Segment</span>
            <FormToggleInput isEdit={true} labelName={'Length'} value={'0'}/>
            <FormToggleInput isEdit={true} labelName={'Width'} value={'0'}/>
            <FormToggleInput isEdit={true} labelName={'Count'} value={'0'}/>
        </div>
    )
}

export default FormCard;
