import React, { useEffect, useState } from "react";

import CardMember from "../components/CardMember";
import MembersContentLoader from "../components/loader/MembersContentLoader";
import Title from "../components/Title";

import MembersAPI from "../services/membersAPI";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Members() {
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
      <Title title="Liste des membres" />
      <Container className="members">
        <Grid container spacing={3}>
          {isLoading ? (
            <MembersContentLoader />
          ) : (
            members.map((member) => (
              <CardMember member={member} key={member.id} />
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}
