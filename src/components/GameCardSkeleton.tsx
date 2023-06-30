import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    // <Card width={'340px'} borderRadius={10} overflow='hidden'> 
     <Card width="100%" borderRadius={10} overflow="hidden"> 
        <Skeleton height={'250px'} />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
};

export default GameCardSkeleton;
