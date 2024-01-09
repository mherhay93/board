import FormCard from "../formCard/FormCard";
import styles from './menu.module.css'

const Menu = () => {
    return (
        <div className={styles.container}>
            <FormCard isEdit={true}/>
            <FormCard isEdit={true}/>
            <FormCard isEdit={true}/>
            <FormCard isEdit={true}/>
            <FormCard isEdit={true}/>
            <FormCard isEdit={true}/>
        </div>
    )
}

export default Menu;
