import { CardBody } from '@chakra-ui/react';
import { Button, ButtonGroup, Card, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';

export function FacilityCard({img, alt, heading, text, price,time}) {
    return (


        <Card maxW="xs">
        <CardBody>
          <Image
            src= {img}
            alt= {alt}
            borderRadius='lg'
            
          />
          <Stack mt='6' spacing='3'>
            <div className='flex justify-between'>
            <Heading size='md'>{heading}</Heading>
            <Text> {time} </Text>


            </div>
            <Text>
              {text}
            </Text>
            <Text color='blue.600' fontSize='lg'>
              {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Book now
            </Button>

          </ButtonGroup>
        </CardFooter>
      </Card>

        
    )
}