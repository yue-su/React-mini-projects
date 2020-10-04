import React from "react"
import { Grid, Box } from "@material-ui/core"
import Description from "./Description"
import "./TomatoTimer.css"

const TomatoTimer = () => {
     return (
       <Grid container spacing={1}>
         <Grid item md={6} xs={12}>
           <Box
             display="flex"
             flexDirection="column"
             justifyContent="center"
             alignItems="center"
             border="2px solid purple"
             borderRadius="10px"
             padding="1rem"
           >
             <Grid
               container
               direction="column"
               justify="center"
               alignItems="center"
             >
               <Grid item>
                 <svg className="timer" viewBox="0 0 100 100">
                   <g class="base-timer__circle">
                     <circle
                       class="base-timer__path-elapsed"
                       cx="50"
                       cy="50"
                       r="45"
                     />
                   </g>
                 </svg>
               </Grid>
               <Grid item></Grid>
             </Grid>
           </Box>
         </Grid>
         <Description />
       </Grid>
     )
}

export default TomatoTimer
