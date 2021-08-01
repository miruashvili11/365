import Button from "./Button";
import './header.css'

const SelectAll = ({sellectAllProducts}) => {
    return(
        <div className={'Select__All'} onClick={sellectAllProducts}>
            <Button content={'Select ALl'} className={'SelectALL'} />
        </div>
    )
}
export default SelectAll
