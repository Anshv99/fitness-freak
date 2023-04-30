import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';

import Logo from  '../assets/images/MyProjectLogo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="20px" alignItems="center" px="10px" pt="24px">
        <img src={Logo} alt="logo" />
        <Typography variant="h6"x  >
        Made with ❤️ by Ansh Vashisht
        </Typography>
        <Box mb="20px" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} width="240px">
          <a style={{color:"black"}} href="https://github.com/Anshv99" target="_blank"><GitHub fontSize="large"/></a>
          <a style={{color:"blue"}} href="https://www.linkedin.com/in/ansh-vashisht-4b4b3024b/" target="_blank"><LinkedIn fontSize="large" /></a>
          <a style={{color:"purple"}} href="https://www.instagram.com/19.ansh.v/" target="_blank"><Instagram fontSize="large" /></a>
        </Box>
      </Stack>
    </Box>
  )
}

export default Footer