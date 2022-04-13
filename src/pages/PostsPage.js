import React, {useEffect, useState} from "react"
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import CardPost from '../components/CardPost.js'
import Masonry from '@mui/lab/Masonry'
import PostsApi from '../services/postsAPI'
import SearchBar from '../components/SearchBar'

export default function Posts(){

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts();
    },[])

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
    }

    const filterPosts = posts.filter((el) => {
        if (filterText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.attributes.content.toLowerCase().includes(filterText);
        }
        
    });

    return (
        <div className="posts">
            <h1>Infos utiles</h1>
            <SearchBar 
                    filterText={filterText}
                    onFilterTextChange={handleFilterTextChange} />
            <Grid container mt={2}>
                <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
                    {isLoading ? (
                        <Box>
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Skeleton width="60%" />
                            <Skeleton />
                            <Skeleton />
                        </Box>
                    ) : filterPosts.map(post => <CardPost key={post.id} post={post}></CardPost>)}
                </Masonry>
            </Grid>
        </div>
    )
}