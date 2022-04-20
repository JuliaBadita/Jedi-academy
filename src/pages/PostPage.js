import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {EMPTY_IMG} from "../config"
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import MarkdownView from 'react-showdown';
import PostsApi from '../services/postsAPI'
import SideBarPost from '../components/SideBarPost'
import Container from '@mui/material/Container';
import Title from '../components/Title'
import PreviousNextButton from "../components/PreviousNextButton";
import { useNavigate } from 'react-router-dom';
import {withRouter} from 'react-router';


export default function Post(){

    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState(null)

    const {slug} = useParams()

    useEffect ( () => {
        fetchPostWithSlug();
    }, [slug])

    const fetchPostWithSlug = async () => {
        const data = await PostsApi.findOneWithSlug(slug);
        setPost(data);
        setIsLoading(false);
    }

    const navigate = useNavigate();

    return (
        <>
        {isLoading ? (
            <Title />
        ) : (
            <Title title={post.attributes.title} />
        )}
            <Container>
                <Grid container className="GridContainer">
                    <Grid item  xs={12} md={8} className="post">
                    {isLoading ? (
                        <>
                            <Skeleton variant="rectangular" width={210} height={118} />
                            <Skeleton width="60%" />
                            <Skeleton />
                            <Skeleton />
                        </>
                    ) : (
                        <>
                            <img src={post.attributes.img.datasrc.data !== null ? post.attributes.img.datasrc.data.attributes.formats.medium.url : EMPTY_IMG} alt={post.attributes.img.alt} />
                            <div>
                                <MarkdownView
                                    markdown={post.attributes.content}
                                    options={{ tables: true, emoji: true }}
                                />
                                <PreviousNextButton text="Retour" onClick={() => navigate(-1)} isNext="false" />
                            </div>
                        </>
                    )}
                    </Grid>
                    <SideBarPost />
                </Grid>
            </Container>
        </>

    )
}