import {Grid, Typography} from "@mui/material";
import HallOfFame from "./hallOfFame";
import styles from './fame.module.css';

export default function HallOfFameContainer() {

  return (
    <Grid container justifyContent='space-evenly' alignItems="center">
      <Grid item className={styles.title}>
        <Typography variant='h4' fontFamily='Abraham' className='button'>Hall of Fame</Typography>
      </Grid>
      <Grid item xs={12}>
        <HallOfFame />
      </Grid>
    </Grid>
  )
}