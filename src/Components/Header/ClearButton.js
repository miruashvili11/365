import Button from "./Button";

const ClearButton = ({unselectAll}) => {
    return(
        <div className={'ClearButton'} onClick={unselectAll}>
            <Button  content={"Clear All"} className={'clearall'}/>
        </div>
    )
}

export default ClearButton
