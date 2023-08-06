import {
  Box,
  Button,
  Icon,
  IconButton,
  // Image,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Tooltip,
  UnorderedList,
  useDisclosure,
} from '@chakra-ui/react';
// import NextLink from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';

export const InfoButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip hasArrow label='About this app'>
        <IconButton
          aria-label='About'
          icon={<FaCircleInfo />}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
        // scrollBehavior='inside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid row='1' spacing='4'>
              <Box>
                <UnorderedList>
                  <ListItem>
                    <Text as='span' fontWeight='bold'>
                      Coordinates are not included.
                    </Text>{' '}
                    For each system, there is only one type of interceptor, so
                    you may use dreadnought AI fragments to handpick
                    class/params/SCS until you are satisfied.
                  </ListItem>
                  <ListItem>
                    This project started to find unique interceptors as prizes
                    for events, so a few percent of the portal addresses are
                    private.
                  </ListItem>
                  <ListItem>
                    Increasing the total count takes priority. For the sake of
                    efficiency, some specs are omitted (or have lower accuracy).
                  </ListItem>
                  <ListItem>
                    All ships in this catalog are found in vanilla game (not
                    modded, not tool assisted) by the project author. You may
                    verify the discoverer of the systems.
                  </ListItem>
                  <ListItem>
                    Some settings and favorites will be saved per browser.
                  </ListItem>
                  <ListItem>
                    Currently, this project is being operated personally.
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box>
                <Text>Author</Text>
                <Text ml='4' mt='1'>
                  Nefilm (
                  <Link
                    color='blue.400'
                    href='https://twitter.com/nefilm_rc'
                    isExternal={true}
                  >
                    @nefilm_rc
                    <Icon
                      as={FaExternalLinkAlt}
                      h='0.8em'
                      ml='0.2em'
                      mr='0.2em'
                      verticalAlign='baseline'
                      w='0.8em'
                    />
                  </Link>
                  )
                </Text>
              </Box>
              <Box>
                <Text>Contributing</Text>
                <Text ml='4' mt='1'>
                  Reports, requests, and PRs are accepted on{' '}
                  <Link
                    color='blue.400'
                    href='https://github.com/nefilmjp/nms-interceptor-catalog'
                    isExternal={true}
                  >
                    GitHub
                    <Icon
                      as={FaExternalLinkAlt}
                      h='0.8em'
                      ml='0.2em'
                      mr='0.2em'
                      verticalAlign='baseline'
                      w='0.8em'
                    />
                  </Link>
                </Text>
              </Box>
              {/* <Box>
                <Link
                  as={NextLink}
                  display='block'
                  href='https://ko-fi.com/D1D7N4R45'
                  isExternal={true}
                  mt='4'
                >
                  <Image
                    alt='Buy Me a Coffee at ko-fi.com'
                    ml='auto'
                    mr='auto'
                    src='https://storage.ko-fi.com/cdn/kofi1.png?v=3'
                  />
                </Link>
              </Box> */}
              <Text>© Nefilm</Text>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} variant='outline'>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
