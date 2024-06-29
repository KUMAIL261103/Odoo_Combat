import { CardBody } from "@chakra-ui/react";
import {
  Button,
  ButtonGroup,
  Card,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export function FacilityCard({ img, alt, heading, text, price, time }) {
  return (
    <Card maxW="xs" className="m-1.5">
      <CardBody>
        <Image
          src={img}
          alt={alt}
          borderRadius="lg"
          className="object-cover h-[40vh] w-[60vh]"
        />
        <Stack mt="6" spacing="3">
          <div className="flex justify-between">
            <Heading size="md">{heading}</Heading>
            <Text> {time} </Text>
          </div>
          <Text>{text}</Text>
          <Text color="red.600" fontSize="lg">
            {price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="2" className="m-auto">
          <Button variant="solid" colorScheme="blue">
            Book now
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
