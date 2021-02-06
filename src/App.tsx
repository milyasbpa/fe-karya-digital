import React,{useState} from 'react';
import Filter from './components/Filter/Filter';
import Square from './components/Square';
import {CSS_COLOR_NAMES} from './datas'; // import list color from './datas'
import Checkbox from '@material-ui/core/Checkbox';
function App() {
  const [arrayWarna, setArrayWarna] = useState<string[]>(CSS_COLOR_NAMES); // initial state array of colors
  const [darkenColor,setDarkenColor] = useState<boolean>(false); // initial state dark mode or not

  // make an array from 0 until number - 1
  const makeArray = (angka:number) => Array.from({
    length: angka - 0
  }, (v, i) => 0 + i);

  // command to make array row and column
  const kolom = makeArray(4); // column
  const baris = makeArray(8); // row

  // set new state based on new array from children Filter component
  const handleWarna = (list:string[]) => {
    setArrayWarna(list)
  }

  // function to set dark mode of color 
  const handleModeDark = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkenColor(event.target.checked);
  };

  return (
    <div style={{textAlign:'center'}}>
      <h2>Front End Test - M Ilyas Bashirah P A</h2>
      {/* colored square component  */}
      {baris.map((itemBaris:number) => (
        <div key={itemBaris} style={{display:'flex', justifyContent:'center'}}>
          {kolom.map((itemKolom:number) => 
          {
            let conditionDarkenItem:boolean = Math.round(Math.random()*(kolom.length-1)) > itemKolom;
            return (
              <Square
                key={itemKolom}
                darkenColor={darkenColor}
                conditionDarkenItem={conditionDarkenItem}
                arrayWarna={arrayWarna}
              />
          )}
          )}
        </div>
      ))}
    
    {/* color filter */}
    <Filter colorList={CSS_COLOR_NAMES} handleWarna={handleWarna} />

    {/* darken settings */}
    <div style={{marginTop:'2rem'}}>Mode</div>
    <Checkbox
        checked={darkenColor}
        onChange={handleModeDark}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <span>Dark Mode</span>
    </div>
  );
}

export default App;
