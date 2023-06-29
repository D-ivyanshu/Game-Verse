import { Box, HStack, ListItem, Skeleton, SkeletonCircle, SkeletonText, space } from "@chakra-ui/react";

const GenreListSkeleton = () => {
    
  return (
    <>  
        <ListItem paddingY='5px'>
            <HStack>
                <Skeleton height={'32px'} width={'32px'} borderRadius={8} />
                <Skeleton height={'32px'} width={'110px'} borderRadius={5}></Skeleton>
            </HStack>
        </ListItem>
    </>
  );
};

export default GenreListSkeleton;
