import React, { useState } from "react";
import "./love.css";

import { Grid, Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";

import { FiClock } from "react-icons/fi";

import { more } from "../../../data/Love";
import usePagination from "../../../hooks/pagination";
import { Pagination } from "@mui/material";
type Props = {};

type LoveItem = {
  img: string;
  title: string;
  detail: string;
  date: string;
};

const LoveComponents: React.FC<Props> = (props: Props) => {
  const itemsPerPage = 13;

  const { currentPage, currentItems, handlePageChange } = usePagination(
    more,
    itemsPerPage
  );

  return (
    <div className="main">
      <Container className="container-love">
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
            count={Math.ceil(more.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </Container>
    </div>
  );
};

export default LoveComponents;
