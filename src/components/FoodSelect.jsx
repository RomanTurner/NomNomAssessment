import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { findDOMNode } from 'react-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '90%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FoodSelect({labelInput, info, food, setFood}) {
  const classes = useStyles();
  const handleChange = (event) => {
    setFood(event.target.value);
  };
 
    return (
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={food}>{labelInput}</InputLabel>
        <Select
          InputLabelProps={{ shrink: true }}
          labelId={food}
          id={food}
          value={food}
          onChange={handleChange}
          label="food select"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {info.map((el) => <MenuItem key={el.id} value={el}>{el.name}</MenuItem>)}
        </Select>
      </FormControl>
    )
}
