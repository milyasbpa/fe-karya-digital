import * as React from 'react';
import {CSS_COLOR_NAMES} from '../../datas';

export interface ISquareProps {
    darkenColor:boolean;
    conditionDarkenItem:boolean;
    arrayWarna:string[];
}

export default function Square (props: ISquareProps) {
  return (
    <div
            style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              filter: (props.darkenColor && props.conditionDarkenItem) ? 'brightness(60%)' : 'brightness(100%)',
              width:'60px',
              height:'60px',
              backgroundColor:props.arrayWarna[Math.floor(Math.random() * (CSS_COLOR_NAMES.length - 0) ) + 0]
            }}
          >
            {(props.darkenColor && props.conditionDarkenItem) ? 'dark' : 'normal' }
          </div>
  );
}
