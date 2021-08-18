import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function RadioButtonsGroup({value, setValue}) {
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="comparison buttons" name="comparison" value={value} onChange={handleChange}>
        <FormControlLabel value="Dog" control={<Radio />} label="Compare Dog Recipes" />
        <FormControlLabel value="Cat" control={<Radio />} label="Compare Cat Recipes" />
      </RadioGroup>
    </FormControl>
  );
}