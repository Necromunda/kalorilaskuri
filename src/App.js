import { useState } from 'react';
import './App.css';

function App() {
  const [mass, setMass] = useState(80)
  const [intensity, setIntensity] = useState("1.3")
  const [gender, setGender] = useState("male")
  const [calories, setCalories] = useState(0)

  const calcFormula = () => {
    let e = 0
    if (gender === "female") {
      e = (795 + 7.18 * mass) * intensity
    } else {
      e = (879 + 10.2 * mass) * intensity
    }
    setCalories(e.toFixed(0))
  }

  return (
    <div>
      <form >
        <h3 class="text-4xl font-normal leading-normal mt-0 mb-2 text-pink-700">Calories</h3>
        <div>
          <label>Weight</label>
          <input name="weight" type="number" step="1" min="1" value={mass} onChange={e => setMass(e.target.value)} class="px-3 py-1 w-40 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 border-pink-600 outline-none focus:outline-none"></input>
        </div>
        <div>
          <label for="intensity">Intensity</label>
          <select name="intensity" value={intensity} onChange={e => setIntensity(e.target.value)} class="px-3 py-1 w-40 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 border-pink-600 outline-none focus:outline-none">
            <option value="1.3">Light</option>
            <option value="1.5">Usual</option>
            <option value="1.7">Moderate</option>
            <option value="2">Hard</option>
            <option value="2.2">Very hard</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>
          <label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>
          <label>Female</label>
        </div>
        <div>
          <label>Calories:</label>
          <output>{calories}</output>
        </div>
        <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={calcFormula}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
