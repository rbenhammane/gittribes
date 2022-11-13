import {Container} from "@mui/material";
import WorldMapContainer from "../components/map/worldMapContainer";

export default function WorldMapPage() {

  return (
    <Container style={{height: 'calc(100% - 84px)'}}>
      <WorldMapContainer />
    </Container>
  )
}