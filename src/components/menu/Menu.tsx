import FormToggleInput from "../helpers/FormToggleInput/FormToggleInput";
import styles from './menu.module.css'

const Menu = () => {
    return (
        <div className={styles.container}>
            <FormToggleInput
                isEdit={false}
                labelName={'label'}
                value={'value'}
            />
        </div>
    )
}

export default Menu;
