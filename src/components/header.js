import * as React from "react"
import PropTypes from "prop-types"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Link,
  Flex,
  Heading,
  Spacer,
  useColorMode,
} from "@chakra-ui/react"

const Header = ({ siteTitle }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex as="header" p="10" w="100%" align="center">
      <Box>
        <Heading as="h1" size="l">
          <Link href="/">{siteTitle}</Link>
        </Heading>
      </Box>
      <Spacer />
      <Button onClick={toggleColorMode} colorScheme="blue">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Flex>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
