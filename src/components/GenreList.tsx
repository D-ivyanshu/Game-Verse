import { HStack, List, ListIcon, ListItem, Image, Text, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre} : Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11, 12];
  
  if (error) return null;
  return (
    <>
      <List spacing={2}>
        {isLoading && skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
              <Button onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
