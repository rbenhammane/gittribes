import {Grid, Typography} from "@mui/material";
import attack from "../../public/images/attack.png"
import fire from "../../public/images/fire.png"
import gear from "../../public/images/gears.png"
import styles from './village.module.css'
import {useRouter} from "next/router";

export default function Village({id, name, attacks = 0, fires = 0, gears = 0}: any) {

  const router = useRouter();
  const {username} = router.query;

  const getClassName = (points: any) => {
    if (points < 3) {
      return styles.normal;
    } else if (points < 6) {
      return styles.warning;
    } else {
      return styles.error;
    }
  }

  return (
    <Grid container justifyContent="space-evenly" alignItems="center" className={styles.header}>
      <Grid container justifyContent="center" spacing={2} item xs={12} className={styles.villageName}>
        <Grid item><Typography variant='h4' fontFamily='Abraham'>{name}</Typography></Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2} item xs={4}>
        <Grid item><Typography variant='h4' fontFamily='Abraham' className={getClassName(attacks)}>{attacks}</Typography></Grid>
        <Grid item><img src={attack.src} /></Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2} item xs={4}>
        <Grid item><Typography variant='h4' fontFamily='Abraham' className={getClassName(fires)}>{fires}</Typography></Grid>
        <Grid item><img src={fire.src} /></Grid>
      </Grid>
      <Grid container justifyContent="center" spacing={2} item xs={4}>
        <Grid item><Typography variant='h4' fontFamily='Abraham' className={getClassName(gears)}>{gears}</Typography></Grid>
        <Grid item><img src={gear.src} /></Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" item style={{margin: 20}}>
        <Grid item><Typography variant='h4' fontFamily='Abraham' className='button' onClick={() => router.push(`/${username}/${id}/arena`)}>Arena</Typography></Grid>
        <Grid item><Typography variant='h4' fontFamily='Abraham' className='button' onClick={() => router.push(`/${username}/${id}/fame`)}>Hall of Fame</Typography></Grid>
      </Grid>
    </Grid>
  )
}