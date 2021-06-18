import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
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
    value: number
}
export type SelectPropsType = { 
    value: any
    onChange: (value: any) => void
    items: ItemPropsType[]
}

export const SelectCustomExample = (props: SelectPropsType) => {


    return <>
    <div>{}</div>
    {props.items.map(i=> <div>{i.title}</div> )}
    
    </>
}