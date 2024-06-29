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

export function FacilityCard({ img, alt, heading, text, price, location }) {
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
            <Text> {location} </Text>
          </div>
        </Stack>
        <div spacing="3" className="mt-3 flex justify-between">
          <div>
            {" "}
            <Text color="black" fontSize="lg">
              {price}
            </Text>
          </div>
          <div>
            {" "}
            <ButtonGroup spacing="2" className="m-auto">
              <Button variant="solid" colorScheme="blue">
                Book now
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
