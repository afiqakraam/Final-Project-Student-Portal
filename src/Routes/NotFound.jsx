import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404 - Not Found</h1>
      <Button colorScheme="blue" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
