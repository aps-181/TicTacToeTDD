
const Square = ({value,testId,onSquareClick}) => {


    return (
        <button data-testid={testId} className="square" onClick={onSquareClick}>{value}</button>
    )
}

export default Square