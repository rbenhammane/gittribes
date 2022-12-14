import {Box} from "@mui/system";
import styles from './worldMap.module.css';
import {useEffect, useState} from "react";
import {
  generateForestsCoordinates,
  generateLakesCoords,
  generateTreesCoordinates, generateVillagesCoords
} from "./worldMapUtil";

export default function WorldMap({setVillage, villages = []}: any) {

  const [mapCoords, setMapCoords] = useState<any>({
    rotationRadius: 1,
    diameter: 600,
    worldRadius: 320,
    top: 0,
    left: 0,
    mouseX: 0,
    mouseY: 0
  });

  const [villagesCoords, setVillagesCoords] = useState<any[]>();
  const [lakesCoords, setLakesCoords] = useState<any[]>();
  const [forestsCoordinates, setForestsCoordinates] = useState<any[]>();
  const [treesCoordinates, setTreesCoordinates] = useState<any[]>();
  const [stonesCoordinates, setStonesCoordinates] = useState<any[]>();

  useEffect(() => {
    let villagesCoords: any[] = generateVillagesCoords(mapCoords, villages);
    let lakesCoords = generateLakesCoords(mapCoords, villagesCoords);
    let forestsCoordinates = generateForestsCoordinates(mapCoords, villagesCoords, lakesCoords);
    let treesCoordinates: any[] = generateTreesCoordinates(mapCoords, villagesCoords, lakesCoords, forestsCoordinates);
    let stonesCoordinates = generateTreesCoordinates(mapCoords, [...villagesCoords, ...treesCoordinates], lakesCoords, forestsCoordinates);
    setVillagesCoords(villagesCoords);
    setLakesCoords(lakesCoords);
    setForestsCoordinates(forestsCoordinates);
    setTreesCoordinates(treesCoordinates);
    setStonesCoordinates(stonesCoordinates);
  }, [])

  const handleMouseMove = (event: any) => {

    if (event.nativeEvent.buttons === 1) {
      let newMapCoords = {...mapCoords};

      if (mapCoords.mouseX !== 0 && mapCoords.mouseY !== 0) {
        newMapCoords.top += event.nativeEvent.y - mapCoords.mouseY;
        newMapCoords.left += event.nativeEvent.x - mapCoords.mouseX;

        if (newMapCoords.top < event.nativeEvent.target.clientHeight - mapCoords.diameter) {
          newMapCoords.top = event.nativeEvent.target.clientHeight - mapCoords.diameter;
        }

        if (newMapCoords.left < event.nativeEvent.target.clientWidth - mapCoords.diameter) {
          newMapCoords.left = event.nativeEvent.target.clientWidth - mapCoords.diameter;
        }

        if (newMapCoords.top > 0) {
          newMapCoords.top = 0;
        }

        if (newMapCoords.left > 0) {
          newMapCoords.left = 0;
        }
      }

      newMapCoords.mouseX = event.nativeEvent.x;
      newMapCoords.mouseY = event.nativeEvent.y;

      setMapCoords(() => newMapCoords);
    }
  };

  const resetMouse = () => {
    setMapCoords({...mapCoords, mouseX: 0, mouseY: 0});
  };

  const villageClassName = (coordinate: any) => {
    if (coordinate.repo.fires && coordinate.repo.attacks) {
      return styles.villageFireAttack;
    } else if (coordinate.repo.attacks) {
      return styles.villageAttack;
    } else if (coordinate.repo.fires) {
      return styles.villageFire;
    } else {
      return styles.village;
    }
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.map} style={{
        top: mapCoords.top,
        left: mapCoords.left,
        width: mapCoords.diameter,
        height: mapCoords.diameter
      }} onMouseMove={handleMouseMove} onMouseLeave={resetMouse} onMouseUp={resetMouse}>
        {
          villagesCoords?.map((coordinate: any) =>
            <div key={Math.random()} className={villageClassName(coordinate)} style={{
              top: mapCoords.worldRadius - 40 * coordinate.y,
              right: mapCoords.worldRadius - 40 * coordinate.x
            }} onMouseDown={() => setVillage(coordinate.repo)} />)
        }
        {
          lakesCoords?.map((coordinate: any) =>
            <div key={Math.random()} className={styles.lake} style={{
              top: mapCoords.worldRadius - 40 * coordinate.y,
              right: mapCoords.worldRadius - 40 * coordinate.x
            }} />)
        }
        {
          forestsCoordinates?.map((coordinate: any) =>
            <div key={Math.random()} className={styles.forest} style={{
              top: mapCoords.worldRadius - 40 * coordinate.y,
              right: mapCoords.worldRadius - 40 * coordinate.x
            }} />)
        }
        {
          treesCoordinates?.map((coordinate: any) =>
            <div key={Math.random()} className={styles.trees} style={{
              top: mapCoords.worldRadius - 40 * coordinate.y,
              right: mapCoords.worldRadius - 40 * coordinate.x
            }} />)
        }
        {
          stonesCoordinates?.map(coordinate =>
            <div key={Math.random()} className={styles.stones} style={{
              top: mapCoords.worldRadius - 40 * coordinate.y,
              right: mapCoords.worldRadius - 40 * coordinate.x
            }} />)
        }
      </Box>
    </Box>
  )
}