import {FC, ReactElement} from "react";
import styles from './layout.module.css'

interface IProps {
    children: ReactElement | ReactElement[];
    title?: string;
}
const Layout:FC<IProps> = ({children, title}) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}

export default Layout;
