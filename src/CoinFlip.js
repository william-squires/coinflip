import { useState } from "react";
import Coin from "./Coin"


/** Flips a coin and logs how many of each side.
 * 
 * props
 * - none
 * 
 * state
 * - numHeads
 * - numTails
 * - face
 */
function CoinFlip() {
    const [numHeads, setNumHeads] = useState(0)
    const [numTails, setNumTails] = useState(0)
    const [face, setFace] = useState()
    let numFlips = numHeads + numTails


    /** returns heads or tails randomly */
    function flip() {
        const rand = Math.floor(Math.random() * 2)
        return rand === 1 ? "heads" : "tails"
    }

    function handleClick(evt) {
        setFace(flip());
        if (face === "heads") {
            setNumHeads(numHeads + 1)
        } else {
            setNumTails(numTails + 1)
        }

    }

    return ( 
    <div>
        <h1>Flip A Coin</h1>
        <div style={{visibility: "hidden"}}>
            <Coin face={face}/>
        </div>
        
        <button onClick={handleClick}>Flip!</button>
        <p>Out of {numFlips}, there have been {numHeads} heads and {numTails} tails.</p>
    </div>)
}

export default CoinFlip;