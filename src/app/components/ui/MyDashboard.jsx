"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDataProvider } from "react-admin";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export const MyDashboard = () => {
  const [userList, setUserList] = useState();
  const dataProvider = useDataProvider();

  useEffect(() => {
    // Custom API call to fetch array of objects
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:8080/api/v1/partner/getInvoices", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const users = response?.data?.data.map((user) => ({
          ...user, // Spread the existing properties
          id: user._id, // Add `id` property as a copy of `_id`
        }));

        console.log(users); // Array of user objects with `id`
        setUserList(users);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const columns = [
    { field: "invoice_id", headerName: "Invoice ID", width: 150 },
    { field: "client_name", headerName: "Client Name", width: 150 },
    {
      field: "client_designation",
      headerName: "Client Designation",
      width: 180,
    },
    { field: "client_mobile", headerName: "Client Mobile", width: 150 },
    { field: "client_ptcl_uan", headerName: "Client PTCL/UAN", width: 150 },
    { field: "client_email", headerName: "Client Email", width: 200 },
    { field: "client_dob", headerName: "Client DOB", width: 150 },
    { field: "client_company_name", headerName: "Client Company", width: 180 },
    { field: "policy_company_name", headerName: "Policy Company", width: 180 },
    { field: "policy_name", headerName: "Policy Name", width: 150 },
    { field: "policy_no", headerName: "Policy No.", width: 150 },
    { field: "policy_issue_date", headerName: "Policy Issue Date", width: 150 },
    {
      field: "policy_expired_date",
      headerName: "Policy Expired Date",
      width: 150,
    },
    {
      field: "policy_gross_amount",
      headerName: "Policy Gross Amount",
      width: 150,
    },
    { field: "policy_net_amount", headerName: "Policy Net Amount", width: 150 },
    { field: "policy_payment_mode", headerName: "Payment Mode", width: 150 },
    {
      field: "policy_payment_invoice_attachment",
      headerName: "Payment Invoice Attachment",
      width: 220,
    },
    {
      field: "partner_agent_employment_code",
      headerName: "Agent Employment Code",
      width: 200,
    },
    { field: "partner_agent_name", headerName: "Agent Name", width: 150 },
    { field: "payment_status", headerName: "Payment Status", width: 150 },
  ];

  const rows = [
    {
      id: 1,
      invoice_id: "INV12345",
      client_name: "John Doe",
      client_designation: "Manager",
      client_mobile: "1234567890",
      client_ptcl_uan: "021-1234567",
      client_email: "john@example.com",
      client_dob: "1990-01-01",
      client_company_name: "ABC Corp",
      policy_company_name: "XYZ Insurance",
      policy_name: "Health Plus",
      policy_no: "POL12345",
      policy_issue_date: "2024-01-01",
      policy_expired_date: "2025-01-01",
      policy_gross_amount: 5000,
      policy_net_amount: 4500,
      policy_payment_mode: "Credit Card",
      policy_payment_invoice_attachment: "invoice123.pdf",
      partner_agent_employment_code: "EMP98765",
      partner_agent_name: "Jane Smith",
      payment_status: "Paid",
    },
    {
      id: 1,
      invoice_id: "INV12345",
      client_name: "John Doe",
      client_designation: "Manager",
      client_mobile: "1234567890",
      client_ptcl_uan: "021-1234567",
      client_email: "john@example.com",
      client_dob: "1990-01-01",
      client_company_name: "ABC Corp",
      policy_company_name: "XYZ Insurance",
      policy_name: "Health Plus",
      policy_no: "POL12345",
      policy_issue_date: "2024-01-01",
      policy_expired_date: "2025-01-01",
      policy_gross_amount: 5000,
      policy_net_amount: 4500,
      policy_payment_mode: "Credit Card",
      policy_payment_invoice_attachment: "invoice123.pdf",
      partner_agent_employment_code: "EMP98765",
      partner_agent_name: "Jane Smith",
      payment_status: "Paid",
    },
    {
      id: 1,
      invoice_id: "INV12345",
      client_name: "John Doe",
      client_designation: "Manager",
      client_mobile: "1234567890",
      client_ptcl_uan: "021-1234567",
      client_email: "john@example.com",
      client_dob: "1990-01-01",
      client_company_name: "ABC Corp",
      policy_company_name: "XYZ Insurance",
      policy_name: "Health Plus",
      policy_no: "POL12345",
      policy_issue_date: "2024-01-01",
      policy_expired_date: "2025-01-01",
      policy_gross_amount: 5000,
      policy_net_amount: 4500,
      policy_payment_mode: "Credit Card",
      policy_payment_invoice_attachment: "invoice123.pdf",
      partner_agent_employment_code: "EMP98765",
      partner_agent_name: "Jane Smith",
      payment_status: "Paid",
    },
    // Add more rows as needed
  ];

  return (
    <Container sx={{ marginTop: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  PENDING
                </Typography>
                <Typography variant="h5" component="div">
                  $100000
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  COMPLETED
                </Typography>
                <Typography variant="h5" component="div">
                  $5
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  TOTAL
                </Typography>
                <Typography variant="h5" component="div">
                  ${userList?.length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6}>
            <Card elevation={3}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid> */}
          <Grid item xs={12}>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={userList}
                rowHeight={38}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: false }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
