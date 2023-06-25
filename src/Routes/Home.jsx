import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="flex">
      <div className="card">
        <div className="box">
          <h2>Studi Independen Kampus Merdeka</h2>
        </div>
        <div className="box">
          <Button as={Link} to="/student" data-testid="student-btn" textDecoration="none" color="black">
            Add Student
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
