import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button, CardActionArea } from '@mui/material';
import { useRouter } from 'next/router';
import { styled, useTheme } from '@mui/material/styles';

const Reports = () => {
    const router = useRouter();
    const theme = useTheme();

    const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

    const handleCardClick = (path) => {
        router.push(path);
    };


    const Indicator = styled('div')(({ theme }) => ({
        width: '64px',
        height: '8px',
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        bottom: '20px',
        borderRadius: '6px'
    }));

    const TriangleImg = styled('img')({
        right: 0,
        bottom: 0,
        height: 170,
        position: 'absolute'
    })

    // First section with the Application Form
    const renderApplicationForm = () => (
        <Grid container>
            <Grid item xs={12} md={4}>
                <Card onClick={() => handleCardClick('/reports/application-form')}>
                    <CardContent sx={{ p: 4, position: 'relative', height: '100%' }}>
                        <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                            Application Form
                        </Typography>
                        <Typography variant='body2' sx={{ mb: 4, color: 'text.secondary', width: '75%' }}>
                            This is the application form for new job applicants
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: theme.palette.primary.main,
                                    borderColor: theme.palette.primary.main,
                                    '&:hover': {
                                        borderColor: theme.palette.primary.dark
                                    }
                                }}
                            >
                                EDIT FORM
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: theme.palette.primary.main,
                                    '&:hover': {
                                        bgcolor: theme.palette.primary.dark
                                    }
                                }}
                            >
                                VIEW FORM
                            </Button>
                        </Box>
                        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );

    // Second section with all other cards
    const renderOtherCards = () => {
        const cards = [
            { title: 'Job Demand Letter Full Time' },
            { title: 'Job Demand Letter Part Time' },
            { title: 'Part Time Quotations' },
            { title: 'Hotel Quotations' },
            { title: 'Company Quotations' },
            { title: 'Passport Handover Letter' },
            { title: 'Passport Safe Letter' },
            { title: 'Job Money Letter' }
        ];

        return (
            <Grid container spacing={6}>
                {cards.map((card, index) => (
                    <Grid item xs={12} md={3} key={index}>
                        <Card>
                            <CardActionArea onClick={() => handleCardClick('/reports/application-form')}>
                                <CardContent sx={{ p: 4, position: 'relative', height: '100%' }}>
                                    <Typography
                                        variant='h6'
                                        sx={{
                                            height: '64px',
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: 'text.secondary', marginBottom: 7 }}>
                                        This is the application form for new job applicants
                                    </Typography>
                                    <Indicator />
                                    <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {renderApplicationForm()}
            {renderOtherCards()}
        </Box>
    );
};

export default Reports;