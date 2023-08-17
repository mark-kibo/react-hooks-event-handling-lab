// Code Keypad Component Here

function Keypad (){
    function handleInput(){
        console.log('Entering password...');
    }
    return (
        <div>
            <form>
                <input type="password" onChange={handleInput}></input>
            </form>
        </div>
    )
}

export default Keypad;