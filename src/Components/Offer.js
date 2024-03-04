import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Offer() {
  return (
    <div style={{backgroundColor:'black'}}>
        <Box>
            <Container>
                <Grid>
                    <Typography variant='h6'color='white' fontFamily='Arapey'>
                          Flat 10% Discount On First Order
                    </Typography>
                </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default Offer