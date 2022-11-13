import {Avatar, Grid} from "@mui/material";
import styles from './fame.module.css';


export default function FamePodiumCard({player, rank}: any) {

  const getRankClass = (rank: any) => {
    switch (rank) {
      case 1: return styles.podiumCard1;
      case 2: return styles.podiumCard2;
      case 3: return styles.podiumCard3;
      // default: styles.podiumCard1
    }
  }

  return (
    <Grid container direction='column'>
      <Grid item>
        <Avatar src={player.avatar} className={getRankClass(rank)}/>
      </Grid>
      <Grid item style={{textAlign: 'center'}}>
        <h3>@{player.username}</h3>
      </Grid>
      <Grid item style={{textAlign: 'center'}}>
        <h3 className={styles.storyPoint}>{player.storyPoints}</h3>
      </Grid>
    </Grid>
  )
}