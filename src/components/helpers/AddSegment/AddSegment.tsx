import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import addIcon from '../../../assets/icons/icons-add.png'
import {addSegment} from "../../../redux/segments/segments";
import {generateColorNumber} from "../../../utiles/utiles";
import styles from './addSegment.module.css'

const AddSegment = () => {
    const dispatch = useDispatch()
    const defaultSegment = {
        id:uuidv4(),
        bgColor: `rgb(${generateColorNumber()}, ${generateColorNumber()}, ${generateColorNumber()})`,
        count: '1',
        length: '',
        width: '',
    }
    
    const add = () => {
      dispatch(addSegment(defaultSegment))
    }
    
    return (
        <div onClick={add} className={styles.container}>
            <img src={addIcon} alt={'add'}/>
        </div>
    )
}

export default AddSegment;
