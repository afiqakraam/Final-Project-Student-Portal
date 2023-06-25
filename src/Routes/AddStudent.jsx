import React, { useState } from "react";
import { Box, Button, Input, Select } from "@chakra-ui/react";
import NavBar from "../components/Navbar";

const AddStudent = (props) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [prody, setPrody] = useState("");
  const [picture, setPicture] = useState("");

  const addStudent = async (e) => {
    e.preventDefault();

    const tempData = {
      fullname: fullName,
      address: address,
      birthDate: date,
      gender: gender,
      phoneNumber: phone,
      faculty: "",
      programStudy: prody,
      profilePicture: picture,
    };

    const prodi = tempData["programStudy"];

    if (
      prodi === "Ekonomi" ||
      prodi === "Akuntansi" ||
      prodi === "Manajemen"
    ) {
      tempData["faculty"] = "Fakultas Ekonomi";
    } else if (
      prodi === "Hubungan Internasional" ||
      prodi === "Administrasi Bisnis" ||
      prodi === "Administrasi Publik"
    ) {
      tempData["faculty"] = "Fakultas Ilmu Sosial dan Politik";
    } else if (prodi === "Arsitektur" || prodi === "Teknik Sipil") {
      tempData["faculty"] = "Fakultas Teknik";
    } else {
      tempData["faculty"] = "Fakultas Teknologi Informasi dan Sains";
    }

    props.createStudent(tempData);

    setFullName("");
    setAddress("");
    setDate("");
    setGender("");
    setPhone("");
    setPrody("");
    setPicture("");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="card-form" id="form-student">
          <form onSubmit={addStudent}>
            <div className="label-input">
              <label htmlFor="input-name">Fullname</label>
              <Input
                type="text"
                data-testid="name"
                id="input-name"
                onChange={({ target }) => setFullName(target.value)}
                value={fullName}
              />
            </div>
            <div className="label-input">
              <div className="input-doubel">
                <div className="col-inp">
                  <label htmlFor="input-picture">Profile Picture</label>
                  <Input
                    type="text"
                    style={{ width: "90%" }}
                    id="input-picture"
                    data-testid="profilePicture"
                    onChange={({ target }) => setPicture(target.value)}
                    value={picture}
                  />
                </div>
                <div className="col-inp">
                  <label htmlFor="input-address">Address</label>
                  <Input
                    type="text"
                    data-testid="address"
                    onChange={({ target }) => setAddress(target.value)}
                    value={address}
                  />
                </div>
              </div>
            </div>
            <div className="label-input">
              <div className="input-doubel">
                <div className="col-inp">
                  <label htmlFor="input-phone">Phone Number</label>
                  <Input
                    type="text"
                    id="input-phone"
                    data-testid="phoneNumber"
                    style={{ width: "90%" }}
                    onChange={({ target }) => setPhone(target.value)}
                    value={phone}
                  />
                </div>
                <div className="col-inp">
                  <label htmlFor="input-date">Birth Date</label>
                  <Input
                    type="date"
                    id="input-date"
                    data-testid="date"
                    onChange={({ target }) => setDate(target.value)}
                    value={date}
                  />
                </div>
              </div>
            </div>
            <div className="label-input">
              <label htmlFor="input-gender">Gender</label>
              <Select
                className="input-select"
                id="input-gender"
                data-testid="gender"
                onChange={({ target }) => setGender(target.value)}
                value={gender}
              >
                <option></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </div>
            <div className="label-input">
              <label htmlFor="input-prody">Program Study</label>
              <Select
                className="input-select"
                data-testid="prody"
                id="input-prody"
                onChange={({ target }) => setPrody(target.value)}
                value={prody}
              >
                <option></option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">Hubungan Internasional</option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </Select>
            </div>
            <div className="label-input">
              <Button
                type="submit"
                id="add-btn"
                className="btn-add"
                data-testid="add-btn"
              >
                Add student
              </Button>
            </div>
          </form>
          <Box className="footer">...</Box>
        </div>
      </div>
    </>
  );
};

export default AddStudent;
