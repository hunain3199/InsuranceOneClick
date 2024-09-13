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

export const MyDashboard = () => {
  const [userList, setUserList] = useState();
  const dataProvider = useDataProvider();
  useEffect(() => {
    dataProvider
      .getList("users", {
        pagination: { page: 1, perPage: 10 },
        sort: { field: "name", order: "ASC" },
        filter: {},
      })
      .then(({ data, total }) => {
        // setUsers(data);
        // setLoading(false);
        setUserList(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        // setLoading(false);
      });
  }, []);

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
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card elevation={3}>
              <CardContent></CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          {/* <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box> */}
        </Grid>
      </Box>
    </Container>
  );
};
