import React from 'react';
import { 
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from '@chakra-ui/react';

const Footer = ({ studentName, studentId }) => {
  return (
    <Box className="footer">
      <p className="student-name">Afiq Akram</p>
      <p className="student-id">FE5144619</p>
    </Box>
  );
};

export default Footer;
