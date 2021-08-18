import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function CallToAction() {
    return (
        <Grid item xs={12}>
            <Typography
            variant="h4"
            component="h4"
            gutterBottom>
            READY TO GO FRESH?
            </Typography>
            <Button
                variant="outlined"
                color="primary"
                href="#outlined-buttons">
              Let's get started
            </Button>
        </Grid>
        
    )
}
