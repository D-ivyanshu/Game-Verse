import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main" `,
        }}
      >
        <GridItem bg="red" area={"nav"}>
          Nav
        </GridItem>
        <Show above="lg">
        <GridItem bg="yellow" area={"aside"}>
          aside
        </GridItem>
        </Show>
        <GridItem bg="green" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
