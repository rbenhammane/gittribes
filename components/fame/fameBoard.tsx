import {Grid} from "@mui/material";
import {inspect} from "util";
import styles from './fame.module.css';
import badge1 from '../../public/images/badge1.png';
import badge2 from '../../public/images/badge2.png';
import badge3 from '../../public/images/badge3.png';
import badge4 from '../../public/images/badge4.png';
import badge5 from '../../public/images/badge5.png';
import badge6 from '../../public/images/badge6.png';
import badge7 from '../../public/images/badge7.png';
import badge8 from '../../public/images/badge8.png';
import badge9 from '../../public/images/badge9.png';
import badge10 from '../../public/images/badge10.png';
import badge11 from '../../public/images/badge11.png';
import badge12 from '../../public/images/badge12.png';


export default function FameBoard({players}) {

  const getBadge = (badge) => {
    switch (badge) {
      case '1': return badge1.src;
      case '2': return badge2.src;
      case '3': return badge3.src;
      case '4': return badge4.src;
      case '5': return badge5.src;
      case '6': return badge6.src;
      case '7': return badge7.src;
      case '8': return badge8.src;
      case '9': return badge9.src;
      case '10': return badge10.src;
      case '11': return badge11.src;
      case '12': return badge12.src;
    }
  }

  return (
    <Grid container style={{marginTop: 50}}>

      {players.map(player =>
        <Grid item container justifyContent='space-between' key={player.id} xs={12} className={styles.boardRow}>
          <Grid item xs sm={3}>
            {player.username}
          </Grid>
          <Grid item container xs direction='row'>
            <Grid item>
              {player.badges.map((badge, index) => <img key={index} src={getBadge(badge)} width={30} />)}
            </Grid>
          </Grid>
          <Grid item xs={1}>
            {player.storyPoints}
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}