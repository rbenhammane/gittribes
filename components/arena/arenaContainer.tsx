import {Grid, Typography} from "@mui/material";
import styles from "./arena.module.css";
import Arena from "./arena";


export default function ArenaContainer() {

  const combats = [
    {
      attackers: [
        {
          id: 1,
          username: 'rbenhammane',
          avatar: "https://avatars.githubusercontent.com/u/6841457?v=4"
        }
      ],
      defenders: [
        {
          id: 2,
          username: 'aschroder',
          avatar: "https://avatars.githubusercontent.com/u/19329820?v=4"
        }
      ]
    },
    {
      attackers: [
        {
          id: 1,
          username: 'rbenhammane',
          avatar: "https://avatars.githubusercontent.com/u/6841457?v=4"
        },
        {
          id: 3,
          username: 'someonelese',
          avatar: "https://avatars.githubusercontent.com/u/75455919?v=4"
        }
      ],
      defenders: [
        {
          id: 4,
          username: 'johnpapa',
          avatar: "https://avatars.githubusercontent.com/u/75455919?v=4"
        }
      ]
    },
    {
      attackers: [
        {
          id: 4,
          username: 'johnpapa',
          avatar: "https://avatars.githubusercontent.com/u/75455919?v=4"
        }
      ],
      defenders: []
    },
    {
      attackers: [
        {
          id: 1,
          username: 'rbenhammane',
          avatar: "https://avatars.githubusercontent.com/u/6841457?v=4"
        },
      ],
      defenders: [
        {
          id: 2,
          username: 'aschroder',
          avatar: "https://avatars.githubusercontent.com/u/19329820?v=4"
        },
        {
          id: 4,
          username: 'johnpapa',
          avatar: "https://avatars.githubusercontent.com/u/75455919?v=4"
        }
      ]
    }
  ]

  return (
    <Grid container justifyContent='space-evenly' alignItems="center">
      <Grid item className={styles.title}>
        <Typography variant='h4' fontFamily='Abraham' className='button'>Arena</Typography>
      </Grid>
      <Grid item xs={12}>
        <Arena combats={combats}/>
      </Grid>
    </Grid>
  )
}