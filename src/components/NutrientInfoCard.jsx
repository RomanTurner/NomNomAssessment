import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function NutrientInfoCard() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
                <Typography
                    variant="h4"
                    component="h4"
                    color="textSecondary"
                    gutterBottom>
                    Protein
                </Typography>
                <Typography
                    variant="p"
                    component="p"
                    color="textSecondary"
                    gutterBottom
                >
                    Not all proteins are created equal.
                    Kibble and other more processed foods
                    can use less digestible, lower quality protein.
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    variant="h4"
                    component="h4"
                    gutterBottom
                    color="textSecondary"
                >
                    Fat
                </Typography>
                 <Typography
                    variant="p"
                    component="p"
                    color="textSecondary"
                    gutterBottom
                >
                    Fat can oxidize over time,
                    causing issues with digestion.
                    We monitor our fresh diets for oxidation,
                    and the fats are healthier since they are fresh.
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                variant="h4"
                    component="h4"
                    color="textSecondary"
                    gutterBottom
                >
                    Carbohydrate
                </Typography>
                 <Typography
                    variant="p"
                    component="p"
                    color="textSecondary"
                    gutterBottom
                >
                    Nom Nom uses only whole food
                    sources of carbohydrates - no grain byproducts,
                    sugars, or starches added.
                </Typography>
            </Grid>
        </Grid>
    )
}
