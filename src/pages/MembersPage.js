import React, { useEffect, useState } from "react";

import CardMember from "../components/CardMember";
import MembersContentLoader from "../components/loader/MembersContentLoader";

import MembersAPI from "../services/membersAPI";

import Grid from "@mui/material/Grid";

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
    <div className="members">
      <h1>Liste des membres</h1>
      <Grid container spacing={3}>
        {isLoading ? (
          <MembersContentLoader />
        ) : (
          members.map((member) => (
            <CardMember member={member} key={member.id} />
          ))
        )}
      </Grid>
    </div>
  );
}
