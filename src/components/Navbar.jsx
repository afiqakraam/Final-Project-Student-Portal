import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Link as ChakraLink } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <>
      <nav>
        <ChakraLink as={Link} to="/" data-testid="home-page">Student Portal</ChakraLink>
        <ChakraLink as={Link} to="/student" data-testid="student-page">All Student</ChakraLink>
        <ChakraLink as={Link} to="/add" data-testid="add-page">Add Student</ChakraLink>
      </nav>
    </>
  );
};

export default NavBar;
