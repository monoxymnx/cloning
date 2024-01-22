import React from 'react'
import SlideShow from '../../components/bodys/home/Slide/SlideShow'
import Advert from '../../components/bodys/home/Advert/Advert'
import Menu from '../../components/bodys/home/Menu/Menu'
import Highlight from '../../components/bodys/home/Highlight/Highlight'
import  Container  from '@mui/material/Container'
import Grid from "@mui/material/Grid";
import Clipvideo from '../../components/bodys/home/Clipvideo/Clipvideo'
import Photo from '../../components/bodys/home/Photo/Photo'
import Mstyle from '../../components/bodys/home/Mstyle/Mstyle'
import Halal from '../../components/bodys/home/Halal/Halal'
import Slowlife from '../../components/bodys/home/Slowlife/Slowlife'
import EndContent from '../../components/bodys/home/Endcontent/EndContent'
import Banner from '../../components/headers/Banner/Banner'
import Bar from '../../components/headers/bar/Bar'
type Props = {}

const Home = (props: Props) => {
  return (
    <div>
     
      
      <SlideShow />
      <Container className="containerHome">
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}></Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Advert />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Menu />
          </Grid>
        </Grid>
      </Container>
      <div style={{ backgroundColor: "#2B2625" }}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Highlight />
        </Grid>
      </div>
      <Container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Clipvideo />
        </Grid>
      </Container>
      <div style={{ backgroundColor: "#2B2625" }}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Photo />
        </Grid>
      </div>
      <Container>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Mstyle />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Halal />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Slowlife />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <EndContent />
        </Grid>
      </Container>
    </div>
  );
}

export default Home