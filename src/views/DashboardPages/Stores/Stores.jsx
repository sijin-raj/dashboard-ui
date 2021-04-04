// npm packages
import React, { useState, useEffect } from "react";

// custom pages
import config from "config";
import Table from "components/Table/Table";
import Loader from "components/Loader/Loader";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  dialog: {
    backgroundColor: " #00838f",
    color: "#fff",
    borderBottomColor: "cornflowerblue",
    boxShadow: "rgb(84, 84, 84) 0px 2px 20px 0px",
  },
  btn: {
    color: "#fff",
    backgroundColor: "#0277bd",
    fontWeight: "bold",
    border: "1px solid #0277bd",
    "&:hover": {
      color: "#3f50b6",
      backgroundColor: "#fff",
      border: "1px solid #0277bd",
    },
  },
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export default function Stores(props) {
  let classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    getStores();
  }, []);

  async function getStores() {
    setLoading(true);
    const obj = {
      method: "GET",
    };

    fetch(config.host + "/store", obj)
      .then(async (res) => {
        if (res.status == 401) {
          toast.error("Session Expired, Please Login to Continue", {
            position: toast.POSITION.TOP_CENTER,
          });
          return this.props.history.push("/signIn");
        }
        let body = await res.json();
        console.log(body);
        setStores(body);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }

  return (
    <Loader Loading={loading}>
      <React.Fragment>
        <Card>
          <Container maxWidth="lg" style={{ marginTop: "2%" }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <Grid
                  container
                  spacing={2}
                  alignItems="flex-end"
                  style={{ marginTop: "-6px" }}
                >
                  <Grid item>
                    <SearchIcon />
                  </Grid>
                  <Grid item>
                    <TextField id="Search" label="Search" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} md={6}></Grid>
            </Grid>
          </Container>
          <Table
            headings={["S.No.", "Name", "Street Name", "Area Name", "StoreId"]}
            data={stores.map((p, i) => [
              i + 1,
              p.name,
              p.streetName,
              p.areaName,
              p.storeId,
            ])}
          />
        </Card>
      </React.Fragment>
    </Loader>
  );
}
