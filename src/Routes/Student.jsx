import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Select, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const Student = (props) => {
  const { students, setStudents, loading, setLoading, renderStudents } = props;
  const [faculty, setFaculty] = React.useState('All');

  React.useEffect(() => {
    setLoading(true);
    renderStudents();
  }, []);

  const deleteStudent = (id) => {
    fetch(`http://localhost:3001/student/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setStudents((prevStudents) =>
          prevStudents.filter((student) => student.id !== id)
        );
      })
      .catch((error) => console.log(error));
  };

  const BodyStudent = () => {
    return (
      students &&
      students.map((student, index) => {
        if (faculty === 'All' || faculty === student.faculty) {
          return (
            <Tr className="student-data-row" key={student.id}>
              <Td>{index + 1}</Td>
              <Td>
                <Link to={`${student.id}`}>{student.fullname}</Link>
              </Td>
              <Td>{student.faculty}</Td>
              <Td>{student.programStudy}</Td>
              <Td>
                <button
                  data-testid={`delete-${student.id}`}
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>
              </Td>
            </Tr>
          );
        }
        return null;
      })
    );
  };

  return (
    <>
      <NavBar />
      <Box className="container">
        {loading === true ? (
          <p>Loading ...</p>
        ) : (
          <>
            <Box className="col">
              <Box className="row">
                <Select
                  className="search"
                  data-testid="filter"
                  onChange={({ target }) => setFaculty(target.value)}
                >
                  <option value="All">All</option>
                  <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                  <option value="Fakultas Ilmu Sosial dan Politik">
                    Fakultas Ilmu Sosial dan Politik
                  </option>
                  <option value="Fakultas Teknik">Fakultas Teknik</option>
                  <option value="Fakultas Teknologi Informasi dan Sains">
                    Fakultas Teknologi Informasi dan Sains
                  </option>
                </Select>
              </Box>
              <Box className="row">
                <Table id="table-student">
                  <Thead>
                    <Tr>
                      <Th>No</Th>
                      <Th>Full Name</Th>
                      <Th>Faculty</Th>
                      <Th>Program Study</Th>
                      <Th>Option</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <BodyStudent />
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </>
        )}
      </Box>
      <Footer studentName="Afiq Akram" studentId="FE5144619" />
    </>
  );
};

export default Student;
