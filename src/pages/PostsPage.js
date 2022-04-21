import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import CardPost from "../components/CardPost.js";
import Masonry from "@mui/lab/Masonry";
import PostsApi from "../services/postsAPI";
import SearchBar from "../components/SearchBar";
import Card from "@mui/material/Card";
import Title from "../components/Title";
import Container from "@mui/material/Container";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const skeletonArray = [1, 2, 3, 4];

  const [filterText, setFilterText] = useState("");
  let handleFilterTextChange = (e) => {
    //convert input text to lower case
    var lowerCase = e.toLowerCase();
    setFilterText(lowerCase);
  };

  const fetchAllPosts = async () => {
    const data = await PostsApi.findAll();
    setPosts(data);
    setIsLoading(false);
  };

  const filterPosts = posts.filter((el) => {
    if (filterText === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.attributes.content.toLowerCase().includes(filterText);
    }
  });

  return (
    <>
      <Title title="Infos utiles" />
      <Container className="posts">
        <SearchBar
          filterText={filterText}
          onFilterTextChange={handleFilterTextChange}
        />
        <Grid container mt={2}>
          <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
            {isLoading
              ? skeletonArray.map((skeloton) => (
                  <Card key={skeloton} className="cardInfos">
                    <Skeleton variant="rectangular" height={200} />
                    <Skeleton
                      width="80%"
                      style={{
                        marginBottom: 10,
                        marginTop: 5,
                        marginRight: 16,
                        marginLeft: 16,
                      }}
                    />
                    <Skeleton
                      height={20}
                      style={{ marginRight: 16, marginLeft: 16 }}
                    />
                    <Skeleton
                      height={20}
                      style={{ marginRight: 16, marginLeft: 16 }}
                    />
                    <Skeleton
                      height={20}
                      style={{ marginRight: 16, marginLeft: 16 }}
                    />
                    <Skeleton
                      height={20}
                      width="60%"
                      style={{
                        marginRight: 16,
                        marginLeft: 16,
                        marginBottom: 10,
                      }}
                    />
                    <Skeleton
                      height={65}
                      width="82%"
                      style={{ marginRight: 20, marginLeft: 20 }}
                    />
                  </Card>
                ))
              : filterPosts.map((post) => (
                  <CardPost key={post.id} post={post}></CardPost>
                ))}
          </Masonry>
        </Grid>
      </Container>
    </>
  );
}
