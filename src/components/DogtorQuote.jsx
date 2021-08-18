import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DogtorImg from '../img/dogtor.jpeg'
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
  },
    media: {
    width: 'fill',
    maxWidth: 200,
    height: 200,
  },
});

export default function DogtorQuote() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={2} >
                    <CardMedia
                        className={classes.media}
                        image={DogtorImg}
                        alt='Dr. Shmalberg, smiling, wearing a lab coat'
                    />
                 </Grid>
            <Grid item xs={12} md={8}>
                <Typography align='left' variant="h6" color="textSecondary" component="p">
                    Dr. Shmalberg says: "We should feed by calorie, not by weight.
                    Percentages on commercial pet food labels are not reliable because
                    they are based on weight, and the values are affected by many factors,
                    including moisture, fiber and minerals. Use this calculator to get a more
                    accurate picture of how another pet food brand compares with Nom Nom."
              </Typography>
            </Grid>
        </Grid>
    </div>
    )
}
