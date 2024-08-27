import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function InfiniteScrolling() {
  const PAGE_LIMIT = 2; // Number of items per page
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const apiPath = "https://fakestoreapi.com/products";

  const getProducts = () => {
    axios
      .get(apiPath)
      .then((res) => {
        const start = data.length;
        const end = start + PAGE_LIMIT;
        const newProducts = res.data.slice(start, end);

        setData([...data, ...newProducts]);

        if (end >= res.data.length) {
          setHasMore(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const fetchMoreData = () => {
    if (hasMore) {
      getProducts();
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<CircularProgress />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Grid container spacing={2}>
          {data.map((res, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  boxShadow: 1,
                  padding: 2,
                  marginBottom: 2,
                  borderRadius: 1,
                }}
              >
                <div>{index + 1}</div>
                <img
                  src={res.image}
                  alt={res.title}
                  width="100px"
                  height="100px"
                />
                <div>{res.category}</div>
                <div>${res.price}</div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </>
  );
}

export default InfiniteScrolling;
