import {
  Container,
  Heading,
  Box,
  Grid,
  GridItem,
  VStack,
  Button,
} from "@chakra-ui/react";
import ArticleCard from "./ArticleCard";
import IllustrateTiles from "@/public/img/Illustrate tiles.png";
import Image from "next/image";

const SquareIllustrate = () => {
  return (
    <svg
      width="155"
      height="155"
      viewBox="0 0 155 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M154.164 128.871C154.699 128.335 155 127.61 155 126.853C155 124.311 151.927 123.038 150.129 124.835L124.836 150.129C123.038 151.926 124.311 155 126.853 155C127.61 155 128.336 154.699 128.871 154.164L154.164 128.871ZM152.809 155C150.857 155 149.88 152.64 151.26 151.26C152.64 149.88 155 150.857 155 152.809C155 154.019 154.019 155 152.809 155ZM99.298 155C100.055 155 100.781 154.699 101.316 154.164L154.164 101.315C154.699 100.78 155 100.054 155 99.2974C155 96.7554 151.927 95.4823 150.129 97.2798L97.2802 150.129C95.4826 151.926 96.7557 155 99.298 155ZM71.7424 155C72.4992 155 73.225 154.699 73.7602 154.164L154.164 73.7594C154.699 73.2243 155 72.4986 155 71.7418C155 69.1998 151.927 67.9268 150.129 69.7243L69.7247 150.129C67.927 151.926 69.2002 155 71.7424 155ZM44.1869 155C44.9437 155 45.6695 154.699 46.2046 154.164L154.164 46.2039C154.699 45.6688 155 44.943 155 44.1862C155 41.6441 151.926 40.3711 150.129 42.1686L42.1691 150.129C40.3715 151.926 41.6446 155 44.1869 155ZM16.6313 155C17.3881 155 18.1139 154.699 18.6491 154.164L154.164 18.6486C154.699 18.1135 155 17.3877 155 16.6309C155 14.0887 151.926 12.8156 150.129 14.6132L14.6135 150.129C12.8159 151.926 14.0891 155 16.6313 155ZM-6.04828e-06 138.369C-6.1594e-06 140.911 3.0734 142.184 4.87089 140.386L140.386 4.87125C142.184 3.07364 140.911 -6.15861e-07 138.369 -7.26984e-07C137.612 -7.60065e-07 136.886 0.300636 136.351 0.835773L0.835703 136.351C0.300607 136.886 -6.0152e-06 137.612 -6.04828e-06 138.369ZM-4.84379e-06 110.813C-4.95491e-06 113.355 3.07339 114.628 4.87088 112.831L112.831 4.87115C114.628 3.07357 113.355 -1.82035e-06 110.813 -1.93147e-06C110.056 -1.96455e-06 109.331 0.300629 108.795 0.835756L0.835704 108.795C0.300609 109.331 -4.81071e-06 110.056 -4.84379e-06 110.813ZM-3.6393e-06 83.2575C-3.75042e-06 85.7995 3.07341 87.0725 4.87089 85.2751L85.2753 4.87128C87.0729 3.07366 85.7998 -3.02484e-06 83.2576 -3.13596e-06C82.5008 -3.16904e-06 81.775 0.300635 81.2398 0.835774L0.835705 81.2399C0.30061 81.775 -3.60622e-06 82.5007 -3.6393e-06 83.2575ZM-2.43481e-06 55.7019C-2.54592e-06 58.2439 3.07341 59.517 4.87089 57.7195L57.7197 4.87127C59.5174 3.07366 58.2442 -4.22933e-06 55.702 -4.34045e-06C54.9452 -4.37353e-06 54.2194 0.300633 53.6843 0.835771L0.835706 53.6843C0.300611 54.2194 -2.40173e-06 54.9452 -2.43481e-06 55.7019ZM-1.23031e-06 28.1462C-1.34143e-06 30.6884 3.07362 31.9615 4.87123 30.1639L30.1642 4.87128C31.9618 3.07366 30.6887 -5.43382e-06 28.1464 -5.54495e-06C27.3896 -5.57803e-06 26.6638 0.300629 26.1287 0.835762L0.835784 26.1284C0.300643 26.6636 -1.19723e-06 27.3894 -1.23031e-06 28.1462ZM-9.57615e-08 2.19076C-1.81075e-07 4.1425 2.35971 5.11996 3.73984 3.73991C5.12 2.35982 4.14256 -6.59419e-06 2.19077 -6.6795e-06C0.980835 -6.73239e-06 -4.28739e-08 0.980833 -9.57615e-08 2.19076Z"
        fill="#D8D9DB"
      />
    </svg>
  );
};

const TilesIllustrate = () => {
  return (
    <Image
      src={IllustrateTiles}
      width={217}
      height={195}
      alt="Illustration tiles"
      placeholder="blur"
      layout="responsive"
    />
  );
};

export default function Article() {
  return (
    <Box width="full" mt="44" mb="24">
      <Grid templateColumns="repeat(12,1fr)" width="full">
        <GridItem colSpan={12} display="grid">
          <Box
            w="full"
            bgColor="#F5F6F8"
            display="flex"
            borderRightRadius="32px"
            position="relative"
            className="articleSection"
          >
            <Container position="relative">
              <Box marginY="-8" display="flex">
                <Heading variant="h2" as="h1" zIndex="20" flexGrow={1}>
                  Our Latest Articles
                </Heading>
                <Button variant="primary">Visit Out Website</Button>
              </Box>

              <VStack py="14" position="relative" spacing="10">
                <ArticleCard />
                <ArticleCard />
              </VStack>
            </Container>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}
