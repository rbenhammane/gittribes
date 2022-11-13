import {Grid, Typography} from "@mui/material";
import podium from "../../public/images/podium.png";
import FamePodiumCard from "./famePodiumCard";


export default function FamePodium({players = []}) {

  return (
    <Grid container justifyContent='space-evenly' spacing={2} style={{marginTop: 0}}>
      <Grid item container justifyContent='center' spacing={2}>
        <Grid item style={{marginTop: 30}} xs={4} sm={3}>
          {players[1] && <FamePodiumCard player={players[1]} rank={2}/>}
        </Grid>
        <Grid item style={{marginTop: 0}} xs={4} sm={3}>
          {players[0] && <FamePodiumCard player={players[0]} rank={1}/>}
        </Grid>
        <Grid item style={{marginTop: 60}} xs={4} sm={3}>
          {players[2] && <FamePodiumCard player={players[2]} rank={3}/>}
        </Grid>
      </Grid>
      <Grid item sm={12} style={{textAlign: 'center'}}>
        <img src={podium.src} width={330}/>
      </Grid>
    </Grid>
  )
}