import {FC} from "react";
import {useDispatch} from "react-redux";
import FormToggleInput from "../helpers/FormToggleInput/FormToggleInput";
import {setSegment} from "../../redux/segments/segments";
import {IValue} from "../../redux/types";
import HeaderCard from "./HeaderCard";
import styles from './formCard.module.css'

interface IProps {
    item: IValue
}
const FormCard:FC<IProps> = ({item}) => {
    const {bgColor, id, length, count, width} = item
    const dispatch = useDispatch()
    const handleChange = (value:string, keyName: string) => {
        if(value && !Number(value)) {
            return
        }
        dispatch(setSegment({value, id, keyName}))
    }
    
    return (
        <div className={styles.container}>
            <HeaderCard id={id}/>
            <div  style={{background: bgColor}} className={styles.body}>
                <FormToggleInput onChange={handleChange} labelName={'Width'} value={width}/>
                <FormToggleInput onChange={handleChange} labelName={'Length'} value={length}/>
                <FormToggleInput onChange={handleChange} labelName={'Count'} value={count}/>
            </div>
        </div>
    )
}

export default FormCard;
