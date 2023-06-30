import React, { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

// query object pattern : to collect all query in one place to query the games 
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  // const[selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const[selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main" `,
        }}
        templateColumns={{
          base:'1fr',
          lg: '250px 1fr' 
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
 