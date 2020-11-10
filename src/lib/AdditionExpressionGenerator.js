const AdditionExpressionGenerator = () => {
    // set max random to 10
    const operandOne = Math.floor(Math.random() * 10);
    const operandTwo = Math.floor(Math.random() * 10);
    const answer = operandOne + operandTwo;
    console.log("Answer: " + answer);
    return (
        <p>{operandOne} + {operandTwo}</p>
    );
};


export default AdditionExpressionGenerator;