import React, { useState } from "react";
//import axios from "axios";
import { Box, Typography, Card, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const JobDemandLetterFullTime = () => {
  const [formData, setFormData] = useState({
    positionTitle: "",
    companyName: "",
    department: "",
    startDate: "",
    annualSalary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/job-demand-letter", formData);
      if (response.status === 200) {
        console.log("Form submitted successfully:", response.data);
        setFormData({
          positionTitle: "",
          companyName: "",
          department: "",
          startDate: "",
          annualSalary: "",
        });
      }

      const downloadResponse = await axios.get("http://localhost:8000/api/job-demand-letter/download", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([downloadResponse.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "JOB_DEMAND_LETTER.docx");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Job Demand Letter - Full Time
      </Typography>
      <form onSubmit={handleFormSubmission}>
        <Typography variant="body1" gutterBottom>
          We are pleased to extend an offer of employment for the position of
          <TextField
            name="positionTitle"
            placeholder="Position Title"
            value={formData.positionTitle}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{ mx: 1 }}
          />
          at
          <TextField
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            variant="outlined"
            size="small"
            sx={{ mx: 1 }}
          />
          .
        </Typography>

        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Position</TableCell>
                <TableCell>
                  <TextField
                    name="positionTitle"
                    placeholder="Position"
                    value={formData.positionTitle}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Department</TableCell>
                <TableCell>
                  <TextField
                    name="department"
                    placeholder="Department"
                    value={formData.department}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Start Date</TableCell>
                <TableCell>
                  <TextField
                    name="startDate"
                    placeholder="Start Date"
                    value={formData.startDate}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Annual Salary</TableCell>
                <TableCell>
                  <TextField
                    name="annualSalary"
                    placeholder="Annual Salary"
                    value={formData.annualSalary}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Card>
  );
};

export default JobDemandLetterFullTime;
