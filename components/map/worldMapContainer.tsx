import WorldMap from "./worldMap";
import styles from './worldMapContainer.module.css'
import {Box} from "@mui/system";
import Village from "../village/village";
import {useState} from "react";

export default function WorldMapContainer() {

  const [village, setVillage] = useState<any>();
  const villages = [
     {id: 1, name: 'First project', fires: 1},
     {id: 2, name: 'Second Project', attacks: 4},
     {id: 3, name: 'Customer X eCom', fires: 3, attacks: 8},
     {id: 4, name: 'TopTal Hackathon'},
     {id: 5, name: 'Another project', fires: 4},
     {id: 6, name: 'Some project fork'},
     {id: 7, name: 'Project XYZ - TopTal', attacks: 1},
     {id: 8, name: 'Personal project'},
     {id: 9, name: 'Customer Y portal'},
     {id: 10, name: 'I don\'t know about this one', fires: 9, attacks: 3},
     {id: 11, name: 'My First Step with AI'},
     {id: 12, name: 'IOT test'}];

  return (
    <Box className={styles.container}>
      <WorldMap setVillage={setVillage} villages={villages}/>
      {village && <Village id={village?.id} name={village?.name} attacks={village?.attacks} fires={village?.fires} gears={village?.gears}/>}
    </Box>
  )
}