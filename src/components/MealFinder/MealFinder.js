import React, { useState } from "react"
import { Grid, Box, Button, Typography, Card, CardMedia, Chip, Link } from "@material-ui/core"
import Description from "./Description"
import Axios from "axios"

const MealFinder = () => {

    const [recipe, setRecip] = useState(null)

    const API = "https://www.themealdb.com/api/json/v1/1/"

    const getRandom = () => {
        Axios.get(API + "random.php")
            .then(res => {
            setRecip(res.data.meals[0])
        })
    }

    const setRecipe = (title) => {
        let result = []
        for (let index = 0; index < 25; index++) {
            result.push(
                <Typography key={index}>{recipe[`${title}${index}`]}</Typography>
            )
        }
        console.log(result)
        return result
    }

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
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => getRandom()}
                >
                  Random
                </Button>
              </Grid>
              {recipe && (
                <Grid item>
                  <Card>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <CardMedia src={recipe.strMealThumb} component="img" />
                      </Grid>
                      <Grid item xs={6}>
                        <Link href={recipe.strSource} target="_blank">
                          <Typography variant="subtitle1">
                            {" "}
                            {recipe.strMeal}
                          </Typography>
                        </Link>
                        <Typography variant="body2">
                          Category: {recipe.strCategory}
                        </Typography>
                        <Typography variant="body2">
                          Area: {recipe.strArea}
                        </Typography>
                        <Typography variant="body2">
                          Tags: {recipe.strTags}
                        </Typography>
                        <Link href={recipe.strYoutube} target="_blank">
                          {" "}
                          Video
                        </Link>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="subtitle1">
                            Ingredient
                          </Typography>
                          {setRecipe("strIngredient")}
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="subtitle1">Measure</Typography>
                          {setRecipe("strMeasure")}
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          {recipe.strInstructions}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              )}
            </Grid>
          </Box>
        </Grid>
        <Description />
      </Grid>
    )
}

export default MealFinder
