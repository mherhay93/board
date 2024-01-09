import {FC, ReactElement} from "react";
import styles from './layout.module.css'

interface IProps {
    children: ReactElement | ReactElement[]
}
const Layout:FC<IProps> = ({children}) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Layout;
