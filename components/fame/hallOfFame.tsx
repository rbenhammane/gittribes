import {Grid} from "@mui/material";
import FamePodium from "./famePodium";
import FameBoard from "./fameBoard";
import FameTimeInterval from "./fameTimeInterval";
import {useEffect, useState} from "react";


export default function HallOfFame() {

  const [selected, setSelected] = useState(3);
  const [players, setPlayers] = useState<any>([]);

  useEffect(() => {
    setPlayers([
      {
        id: 1,
        username: 'rbenhammane',
        avatar: "https://avatars.githubusercontent.com/u/6841457?v=4",
        storyPoints: [19, 80, 190, 3940],
        badges: Array.from(new Set(Array.apply(null, Array(8)).map(() => (Math.random() * 11).toFixed(0))))
      },
      {
        id: 2,
        username: 'aschroder',
        avatar: "https://avatars.githubusercontent.com/u/19329820?v=4",
        storyPoints: [20, 60, 280, 2938],
        badges: Array.from(new Set(Array.apply(null, Array(8)).map(() => (Math.random() * 10).toFixed(0))))
      },
      {
        id: 3,
        username: 'someonelese',
        avatar: "https://avatars.githubusercontent.com/u/75455919?v=4",
        storyPoints: [15, 90, 210, 1456],
        badges: Array.from(new Set(Array.apply(null, Array(8)).map(() => (Math.random() * 8).toFixed(0))))
      },
      {
        id: 4,
        username: 'johnpapa',
        avatar: "https://avatars.githubusercontent.com/u/75455919?v=4",
        storyPoints: [10, 50, 150, 1230],
        badges: Array.from(new Set(Array.apply(null, Array(8)).map(() => (Math.random() * 6).toFixed(0))))
      },
      {
        id: 5,
        username: 'mikelin',
        avatar: "https://avatars.githubusercontent.com/u/75455919?v=4",
        storyPoints: [0, 20, 50, 920],
        badges: Array.from(new Set(Array.apply(null, Array(8)).map(() => (Math.random() * 5).toFixed(0))))
      },
      {
        id: 6,
        username: 'toptal',
        avatar: "https://avatars.githubusercontent.com/u/75455919?v=4",
        storyPoints: [0, 0, 15, 823],
        badges: Array.from(new Set(Array.apply(null, Array(8)).map(() => (Math.random() * 4).toFixed(0))))
      },
      {
        id: 7,
        username: 'bestdevever',
        avatar: "https://avatars.githubusercontent.com/u/75455919?v=4",
        storyPoints: [12, 40, 90, 400],
        badges: Array.from(new Set(Array.apply(null, Array(8)).map(() => (Math.random() * 2).toFixed(0))))
      }
    ]);
  }, []);

  const getPlayers = () => {
    return players.sort((p1: any, p2: any) => p1.storyPoints[selected] > p2.storyPoints[selected] ? -1 : 1)
      .map((player: any) => ({...player, storyPoints: player.storyPoints[selected]}));
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <FameTimeInterval selected={selected} setSelected={setSelected} />
      </Grid>
      <Grid item sm={6}>
        <FamePodium players={getPlayers()}/>
      </Grid>
      <Grid item sm={6}>
        <FameBoard players={getPlayers()}/>
      </Grid>
    </Grid>
  )
}