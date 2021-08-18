import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '10px',
    },
    media: {
        padding: '10px',
        height: '450px',
        width: '300px',
  },
});
export default function FoodInfo({ img, protein, fat, carbs }) {
    const classes = useStyles();
    return (
        <Grid >
             <CardMedia
                className={classes.media}
                image={img}
                alt='Dr. Shmalberg, smiling, wearing a lab coat'
             />
             <Grid>
                <Typography  variant="h6" color="textSecondary" component="label">
                Protein
              </Typography>
                <Typography  variant="h3" color="textSecondary" component="h6">
                   { protein }
                 </Typography>
                <Typography variant="h6" color="textSecondary" component="label">
                   Fat
                 </Typography>
                <Typography  variant="h3" color="textSecondary" component="h6">
                   { fat }
                 </Typography>
                <Typography  variant="h6" color="textSecondary" component="label">
                   Carbohydrate
                 </Typography>
                <Typography  variant="h3" color="textSecondary" component="h6">
                   { carbs }
                 </Typography>
            </Grid>
             
        </Grid>
    )
}
