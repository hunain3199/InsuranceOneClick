"use client";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDataProvider } from "react-admin";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import RegisterInsuranceModal from './RegisterInsuranceModal'

export const MyDashboard = () => {
  const [userList, setUserList] = useState();
  const [open,setOpen]=useState(false)
  const dataProvider = useDataProvider();

  useEffect(() => {
    // Custom API call to fetch array of objects
    const token = localStorage.getItem("token");

    axios
      .get("https://oneclick-server-x09s.onrender.com/api/v1/partner/getInvoices", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        const users = response?.data?.map((user) => ({
          ...user, // Spread the existing properties
          id: user._id, // Add `id` property as a copy of `_id`
        }));
        console.log(users);

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

  const handleRegisterInsurance=()=>{
    setOpen(true)
    console.log(open)
  }

  return (
    <>
    <RegisterInsuranceModal
      open={open}
      handleClose={()=>setOpen(false)}
    />

    <Container
      sx={{
        display: "flex",
        marginTop: { sm: "1rem", xs: "3.5rem" },
        maxWidth: { xs: "350px", sm: "1150px" },
      }}
    >
      <div className="w-full">
        <Box>
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
            <Grid item xs={12}>
              <Box sx={{ height: 400, width: "100%" }}>
                <div className="flex justify-between">
                <h1 className="text-3xl font-bold text-center mb-2">Paid</h1>
                <Button sx={{margin:'2px'}} onClick={handleRegisterInsurance}>Register New Insurance</Button>
                </div>
                <DataGrid
                  rows={userList?.filter((el)=>el.payment_status==="Paid")}
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
            <Grid item xs={12}>
              <Box sx={{ height: 400, width: "100%" }}>
                <h1 className="text-3xl font-bold text-center mb-2 mt-6">Pending</h1>
                <DataGrid
                  rows={userList?.filter((el)=>el.payment_status==="Pending")}
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
      </div>
    </Container>
    </>
  );
};
