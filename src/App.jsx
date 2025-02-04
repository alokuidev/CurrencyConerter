function App() {

  return (
      <div className="converter">
        <input type="number" placeholder="0"/>
        <select>
            <option value="usd">USD</option>
        </select>
        <button className="swap">Swap</button>
        <input type="number" placeholder="0" disabled/>
        <select>
            <option value="inr">INR</option>
        </select>
        <button>Convert USD to INR</button>
    </div>
  
  )
}

export default App
