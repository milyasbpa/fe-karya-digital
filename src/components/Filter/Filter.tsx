import * as React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export interface IFilterProps {
    colorList:string[];
    handleWarna:(list:string[]) => void
}

export default function Filter (props: IFilterProps) {

    // create initial state object of color dynamically from array color list 
    //  example : {red:true , green:true}
    let initialColorState:any= {};
    for (var i = 0; i < props.colorList.length; i++) {
        initialColorState[props.colorList[i]] = true;
    }
    
    // change checkbox become check based on list click
    const [colorState,setColorState] = React.useState<any>(initialColorState);
      const handleColorState = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorState({ ...colorState, [event.target.name]: event.target.checked });
      };

    
    
    React.useEffect(() => {
        // create newArray list of color
        const newArray= Object.keys(colorState).filter((item:any) => colorState[item]===true);
        // send new array of color to parents component
        props.handleWarna(newArray)
    },[colorState]);
    return (
        <div style={{marginTop:'2rem'}}>
            <FormControl component="fieldset" >
                <FormLabel component="legend">Category</FormLabel>
                <FormGroup>
                    {Object.keys(colorState).map((colorItem:any) => (
                        <FormControlLabel
                        key={colorItem}
                        control={<Checkbox checked={colorState[colorItem]} onChange={handleColorState} name={colorItem} />}
                        label={colorItem}
                    />
                    ))}
                </FormGroup>
            </FormControl>
        </div>
    );
}
