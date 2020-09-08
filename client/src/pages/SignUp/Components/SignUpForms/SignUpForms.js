import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputField from '../../../../components/InputField/InputField';
import Button from '../../../../components/Button/Button';
import {inputFields} from "./FormTypes";

const SignUpForms = () => (
  <form noValidate>
    <Grid container spacing={2}>
      {Object.values(inputFields).map(el => (
        <Grid item xs={12} sm={el.size}>
          <InputField
            name={el.name}
            variant={el.variant}
            required
            fullWidth
            label={el.label}
            id={el.id}
            type={el.type}
            dataCy={el.dataCy}
          />
        </Grid>
      ))}
    </Grid>

    <Button  dataCy='sign-up' type='submit' variant='info' fullWidth>
      Sign Up
    </Button>
  </form>
);

export default SignUpForms;
