import React, { useState } from 'react';
import { createStyles, makeStyles, StylesProvider, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './Select.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
  }),
);



export const SelectExample = () => {

        const classes = useStyles();

        const [age, setAge] = useState('none');
      
        const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
          setAge(e.target.value as string);
        };
      
        return <div>
            {age}
            <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{age}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={'none'}>None</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
}

export type ItemPropsType = {
    title: string
    value: any
}
export type SelectPropsType = { 
    value ?: any
    onChange: (value: any) => void
    items: ItemPropsType[]
}

export const SelectCustomExample = (props: SelectPropsType) => {
    const selectedItem = props.items.find(i => i.value === props.value)

    const [active, setActive] = useState(false);

    const toggleItem = () =>  setActive(!active)

    return <>
    <div className={styles.select}>
        <span className={styles.main} onClick={toggleItem}>{selectedItem && selectedItem.title}</span>
        
        { active && 
        <div className={styles.items}>
            {props.items.map(i=> <div 
            key={i.value} 
            onClick={()=>{props.onChange(i.value);
            toggleItem();
            }}>{i.title}</div> )}
        </div>}
    </div>
    
    
    </>
}