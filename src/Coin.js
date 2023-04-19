

/** Shows a coin.
 *  
 * props
 * - face: heads or tails (string)
 * 
 * state
 * - none
 */
function Coin({face}) {
    return <img src={`${face}.png`} alt={face}/>
}

export default Coin;