import React, { useEffect, useState } from "react";

import CardMemberHome from "./CardMemberHome";
import MembersContentLoader from "./loader/MembersContentLoader";
import SaberButton from "../components/SaberButton";

import MembersAPI from "../services/membersAPI";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function MembersHome() {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState(null);

  useEffect(() => {
    fetchAllMembers();
  }, []);

  const fetchAllMembers = async () => {
    const response = await MembersAPI.findAll();
    setMembers(response.data);
    setIsLoading(false);
  };
  return (
    <div>
      <Container className="membersHome">
        <h1>Liste des membres</h1>

        <Grid container spacing={3} columns={3}>
          {isLoading ? (
            <MembersContentLoader />
          ) : (
            members.map((member) => (
              <CardMemberHome member={member} key={member.id} />
            ))
          )}
        </Grid>
        <SaberButton
          text="En savoir plus..."
          link={"/liste-des-membres"}
        ></SaberButton>
      </Container>
    </div>
  );
}
