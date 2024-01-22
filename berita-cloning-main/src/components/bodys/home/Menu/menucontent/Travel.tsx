import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import { FiClock } from "react-icons/fi";
import { TravelData } from "../data/Travel";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

type Props = {};

const Travel = (props: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TravelData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <h2 style={{ textAlign: "start" }}>Travel</h2>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          display="flex"
          flexWrap="wrap"
        >
          <Grid item xs={6}>
            <p style={{ textAlign: "start" }}>รวมข่าวสารมุสลิมที่น่าสนใจ</p>
          </Grid>
          <Grid item xs={6}>
            <Link to="/travel">
              <Button style={{ backgroundColor: "green", color: "#fff" }}>
                อ่านบทความทั้งหมด
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src={currentItems[0].img}
                alt=""
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />

              <p
                style={{
                  textAlign: "center",
                  fontSize: "13px",
                  marginTop: "5px",
                }}
              >
                {currentItems[0].title}
              </p>
              <Typography
                variant="body1"
                color="text.secondary"
                style={{ marginTop: "10px" }}
              >
                <div style={{ fontSize: 12 }}> {currentItems[0].detail}</div>
                <div style={{ fontSize: 12 }}>
                  <FiClock />
                  {currentItems[0].date}
                </div>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Grid container spacing={2}>
                {currentItems.slice(1, 5).map((item, index) => (
                  <Grid
                    key={index}
                    item
                    xs={6}
                    sm={8}
                    md={6}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        marginTop: "5px",
                      }}
                    >
                      {item.title}
                    </p>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      style={{ marginTop: "10px" }}
                    >
                      <div style={{ fontSize: 12 }}>
                        <FiClock />
                        {item.date}
                      </div>
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Grid container spacing={2}>
                {currentItems.slice(5).map((item, index) => (
                  <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        marginTop: "5px",
                      }}
                    >
                      {item.title}
                    </p>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      style={{ marginTop: "10px" }}
                    >
                      <div style={{ fontSize: 12 }}>
                        <FiClock />
                        {item.date}
                      </div>
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination
              count={Math.ceil(TravelData.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Travel;
