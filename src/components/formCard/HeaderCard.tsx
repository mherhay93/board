import {useDispatch} from "react-redux";
import {FC} from "react";
import deleteIcon from '../../assets/icons/icons-trash.svg'
import {deleteSegment} from "../../redux/segments/segments";
import styles from './formCard.module.css'

interface IProps {
    id: string
}

const HeaderCard: FC<IProps> = ({id}) => {
    const dispatch = useDispatch()
    const deleteSeg = () => {
        dispatch(deleteSegment(id))
    }
    
    return (
        <div className={styles.header}>
            <span className={styles.title}>Segment</span>
            <img onClick={deleteSeg} className={styles.icon} alt={'delete'} src={deleteIcon}/>
        </div>
    )
}

export default HeaderCard;
