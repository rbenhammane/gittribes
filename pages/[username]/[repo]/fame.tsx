import {Container} from "@mui/material";
import WorldMapContainer from "../../../components/map/worldMapContainer";
import HallOfFameContainer from "../../../components/fame/hallOfFameContainer";

export default function HallOfFame() {

  return (
    <Container style={{height: 'calc(100% - 84px)'}}>
      <HallOfFameContainer />
    </Container>
  )
}