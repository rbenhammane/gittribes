import {Fragment} from 'react';
import {Avatar, Grid} from "@mui/material";
import vs from '../../public/images/vs.png';
import sep from '../../public/images/sep.png';
import styles from "./arena.module.css";

export default function Arena({combats}: any) {

  return (
    <Grid container justifyContent='center' alignContent='center'>
      {combats.map((combat, index) => <Fragment key={index}>
        <Grid item container spacing={5} className={styles.combat}>
          <Grid item xs={0} sm></Grid>
          <Grid item container xs={12} sm={5} justifyContent='center' alignContent='center' spacing={2} style={{paddingLeft: 0}}>
            {combat.attackers.length === 0 && <Grid item>
              <Avatar style={{width: 100, height: 100, margin: 'auto'}}/>
              <h3 style={{textAlign: 'center'}}>???</h3>
            </Grid>}
            {combat.attackers.map((attacker, index1) => <Grid key={index1} item>
              <Avatar src={attacker.avatar} style={{width: 100, height: 100, margin: 'auto'}}/>
              <h3 style={{textAlign: 'center'}}>@{attacker.username}</h3>
            </Grid>)}
          </Grid>
          <Grid item xs={12} sm={1} style={{textAlign: 'center', paddingLeft: 0}}>
            <img src={vs.src} width={60}/>
          </Grid>
          <Grid item container xs={12} sm={5} justifyContent='center' alignContent='center' spacing={2} style={{paddingLeft: 0}}>
            {combat.defenders.length === 0 && <Grid item>
              <Avatar style={{width: 100, height: 100, margin: 'auto'}}/>
              <h3 style={{textAlign: 'center'}}>???</h3>
            </Grid>}
            {combat.defenders.map((attacker, index1) => <Grid key={index1} item>
              <Avatar src={attacker.avatar} style={{width: 100, height: 100, margin: 'auto'}}/>
              <h3 style={{textAlign: 'center'}}>@{attacker.username}</h3>
            </Grid>)}
          </Grid>
          <Grid item xs={0} sm></Grid>
        </Grid>
        <img src={sep.src} width='300'/>
      </Fragment>)}
    </Grid>
  )
}