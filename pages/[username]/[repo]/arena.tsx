import {Container} from "@mui/material";
import HallOfFameContainer from "../../../components/fame/hallOfFameContainer";
import ArenaContainer from "../../../components/arena/arenaContainer";


export default function Arena() {

  return (
    <Container style={{height: 'calc(100% - 84px)'}}>
      <ArenaContainer />
    </Container>
  )
}