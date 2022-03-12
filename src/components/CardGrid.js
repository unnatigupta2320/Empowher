import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import growthmindset from '../resources/growthmindset.png';
import scb from '../resources/scbhackathon.png';
import blockchain from '../resources/blockchain.png';

export default function Cardgrid() {
    return (
        <div style={{ marginLeft: '30%' }}>
            <h1 style={{ fontSize: 45, marginLeft: '4%' }}>KNOWLEDGE WALL</h1>
            <Card sx={{ maxWidth: '60%', marginBottom: '6%' }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={growthmindset}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight='600'>
                        Growth Mindset
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        A growth mindset, Dweck asserts, empowers people to believe they can develop their abilities, brains and talent are just the starting point.
                        Growth mindset activates the ability to focus, determination, the ability to work hard and the courage to embrace failure.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: '60%', marginBottom: '6%' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={scb}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight='600'>
                        SCB Diversity Hackathon
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        This International Womens Day, SCB is aligned with the global theme to #BreaktheBias and to continue encouraging the participation of women and under-represented groups
                        they have organised a diversity hackathon.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Learn More</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: '60%', marginBottom: '6%' }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={blockchain}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontWeight='600'>
                        Blockchain
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                    A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. 
                    Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium">Learn More</Button>
                </CardActions>
            </Card>
        </div>

    );
}
