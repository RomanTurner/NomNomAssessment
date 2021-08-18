import Grid from '@material-ui/core/Grid';
import PageTitle from '../components/PageTitle';
import FoodSelect from '../components/FoodSelect';
import React, { useEffect, useState } from 'react';
import FoodCompare from '../components/FoodCompare';
import DogtorQuote from '../components/DogtorQuote';
import CallToAction from '../components/CallToAction';
import { makeStyles } from '@material-ui/core/styles';
import CalculatorContainer from './CalculatorContainer';
import NutrientInfoCard from '../components/NutrientInfoCard';
import {
  CompetitorDogFoodInfo,
  NomNomDogFoodInfo,
  NomNomCatFoodInfo,
  CompetitorCatFoodInfo,
} from '../food_info/FoodInfo';
import { Typography } from '@material-ui/core';
  
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '10px',
  },
});

export default function PageContainer() {
    const classes = useStyles();
    //Radio Button
    const [value, setValue] = useState('Dog');

    //Select Values
    const [competitorFood, setCompetitorFood] = useState('');
    const [nomNomFood, setNomNomFood] = useState('Chicken Cuisine');

    //Info Values
    const [CompetitorFoodInfo, setCompetitorFoodInfo] = useState(CompetitorDogFoodInfo);
    const [NomNomFoodInfo, setNomNomFoodInfo] = useState(NomNomDogFoodInfo);
    

    useEffect(() => {
        if (value === 'Cat') {
            setCompetitorFoodInfo(CompetitorCatFoodInfo);
            setNomNomFoodInfo(NomNomCatFoodInfo);
            setCompetitorFood('');
            setNomNomFood('');
        } else {
            setCompetitorFoodInfo(CompetitorDogFoodInfo);
            setNomNomFoodInfo(NomNomDogFoodInfo);
            setCompetitorFood('');
            setNomNomFood(NomNomDogFoodInfo[0]);
        }
    }, [value])


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <PageTitle/>
                </Grid>
                <Grid item xs={12}>
                <DogtorQuote/>
                </Grid>
                <Grid item xs={12}>
                    <CalculatorContainer value={value} setValue={setValue}/>
                </Grid>
                 <Grid container item xs={12}>
                    <Grid item xs={12} md={6}>
                        <FoodSelect
                            labelInput={`${value} select`}
                            info={CompetitorFoodInfo}
                            food={competitorFood}
                            setFood={setCompetitorFood} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FoodSelect
                            labelInput={`${value} select`}
                            info={NomNomFoodInfo}
                            food={nomNomFood}
                            setFood={setNomNomFood} />
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        { (!competitorFood  && !nomNomFood) ?
                            <Grid item xs={12}>
                                <Typography
                                    variant="p"
                                    component="p"
                                > Select A Brand to Compare
                                </Typography>
                            </Grid>
                            : (
                      <>
                        <Grid item xs={12}>
                            <Typography>{competitorFood.tagline}</Typography>
                        </Grid>
                        <Grid item align='right' xs={6}>
                            <FoodCompare {...competitorFood }/>
                        </Grid>
                        <Grid item xs={6}>
                            <FoodCompare { ...nomNomFood }/>
                        </Grid>        
                      </>
                      )}
                    </Grid>
                    <Grid item>
                        <NutrientInfoCard/>         
                    </Grid>
                    <Grid item >
                        <CallToAction/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
