import {Grid} from "@mui/material";
import styles from './fame.module.css';


export default function FameTimeInterval({selected = 4, setSelected}) {



  return (
    <Grid container justifyContent='center' className={styles.timeInterval}>
      <Grid item  className={selected == 0 ? styles.timeIntervalItemSelected : styles.timeIntervalItem} onClick={() => setSelected(0)}>
        daily
      </Grid>
      <Grid item  className={selected == 1 ? styles.timeIntervalItemSelected : styles.timeIntervalItem} onClick={() => setSelected(1)}>
        weekly
      </Grid>
      <Grid item  className={selected == 2 ? styles.timeIntervalItemSelected : styles.timeIntervalItem} onClick={() => setSelected(2)}>
        monthly
      </Grid>
      <Grid item  className={selected == 3 ? styles.timeIntervalItemSelected : styles.timeIntervalItem} onClick={() => setSelected(3)}>
        all
        time</Grid>
    </Grid>
  )
}