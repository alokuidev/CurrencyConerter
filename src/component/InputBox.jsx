import React, { useId } from 'react'

function InputBox({
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    slecetdCurrenry = "usd",
    amountDisable=false,
    currencyDisable=false
}) {

  const amountId = useId();  
  return (
    <>
        <input id={amountId} type="number" placeholder="0" disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        <select value={slecetdCurrenry} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
        {currencyOption.map((currency) =>(
                <option key={currency} value={currency} >{currency}</option>
        ))}
            
        </select>
    </>    
  )
}

export default InputBox
