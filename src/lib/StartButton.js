import AdditionExpressionGenerator from './AdditionExpressionGenerator.js';

const StartGame = () => {
    // alert('New Game started!');
    <AdditionExpressionGenerator></AdditionExpressionGenerator>
}

const StartButton = () => {
    return (
        <button 
            className='start-button'
            onClick={StartGame}
        >
            New Game</button>
    );
};


export default StartButton;