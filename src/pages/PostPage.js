import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {EMPTY_IMG} from "../config"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import MarkdownView from 'react-showdown';
import PostsApi from '../services/postsAPI'
import SideBarPost from '../components/SideBarPost'


export default function Post(){

    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState(null)

    const {slug} = useParams()

    useEffect ( () => {
        fetchPostWithSlug();
    }, [])

    const fetchPostWithSlug = async () => {
        const data = await PostsApi.findOneWithSlug(slug);
        setPost(data);
        setIsLoading(false);
    }

    return (
        <div className="post">
        <Grid container>
            <Grid item xs={8}>
            {isLoading ? (
                <Box>
                    <Skeleton variant="rectangular" width={210} height={118} />
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton />
                </Box>
            ) : (
                <>
                
                    <img src={post.attributes.img.datasrc.data !== null ? post.attributes.img.datasrc.data.attributes.formats.medium.url : EMPTY_IMG} alt={post.attributes.img.alt} />
                    <h1>{post.attributes.title}</h1>
                    <MarkdownView
                    markdown={post.attributes.content}
                    options={{ tables: true, emoji: true }}
                    />
                </>
            )}
            </Grid>
            <SideBarPost />
        </Grid>
        </div>

    )
}