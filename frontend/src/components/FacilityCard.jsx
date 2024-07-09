import { CardBody } from "@chakra-ui/react";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  // CardFooter,
  // Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import ConformationalModal from "./ConformationalModal";
 import PropTypes from "prop-types";
 function FacilityCard({ img, alt, heading, price, FacilityId,location,rerender }) {
  // console.log(FacilityId,heading,price,location);
   const [modal, setModal] = useState(false);
  const year = new Date().getFullYear();
  const month = String(new Date().getMonth() + 1).padStart(2, '0');
  const day = String(new Date().getDate()).padStart(2, '0');
  const currentDate = `${year}-${month}-${day}`;
   const wantToBook= ()=>{
     //console.log(FacilityId,heading,price,location,currentDate);
     setModal(true);
   }
   const closeModal = ()=>{
      setModal(false);
    }
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
              <Button variant="solid" colorScheme="blue" onClick={wantToBook} >
                Book now
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </CardBody>
      {
        modal && (
          <ConformationalModal
            FacilityId={FacilityId}
            heading={heading}
            price={price}
            location={location}
            date={currentDate}
            closeModal={closeModal}
            rerender={rerender}
          />)
      }
    </Card>
  );
}
FacilityCard.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  FacilityId: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rerender: PropTypes.func.isRequired,
};

export default FacilityCard;