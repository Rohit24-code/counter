import React,{ useState } from "react";
import styles from './Count.module.css'

function Counter({initialvalue}){
    const [count,setCount] = useState(initialvalue)
    return(
        <div className={styles.body}>
        <h1 className={styles.heading}>Counter : <span style={{color : count%2==0 ? "green" : "red"}}>{count}</span></h1>
        <button className={styles.btn} onClick={() => {setCount(count+1)} }>increment</button>
        <button className={styles.btn} onClick={() => {setCount(count-1)} }>decrement</button>
        <button className={styles.btn} onClick={() => {setCount(count*2)} }>Double</button>
        </div>
    )
}


export default Counter