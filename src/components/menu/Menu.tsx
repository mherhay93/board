import {useSelector} from "react-redux";
import {IStore} from "../../redux/types";
import AddSegment from "../helpers/AddSegment/AddSegment";
import FormCard from "../formCard/FormCard";
import styles from './menu.module.css'

const Menu = () => {
    const {segments} = useSelector((state: IStore) => state.segments) || []

    return (
        <div className={styles.container}>
            {segments.map(item => (
                <FormCard
                    key={item.id}
                    item={item}
                />))}
            <AddSegment/>
        </div>
    )
}

export default Menu;
