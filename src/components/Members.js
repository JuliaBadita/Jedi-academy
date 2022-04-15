import React, { useEffect, useState } from "react";
import CardMember from "./CardMember";

import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export default function Members() {
  const [isLoading, setIsLoading] = useState(true);
  const [members, setMembers] = useState(null);

  useEffect(() => {
    fetch("https://admin-academie-jedi.herokuapp.com/api/members", {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setTimeout(() => {
          setMembers(response.data);
          setIsLoading(false);
        }, 2000);
      });
  }, []);
  return (
    <div className="members">
      <h1>Liste des membres</h1>
      <Grid container spacing={3}>
        {isLoading ? (
          <Stack spacing={1}>
            <Skeleton variant="circular" width={140} height={140} />
            <Skeleton variant="rectangular" width={190} height={24} />
            <Skeleton variant="rectangular" width={170} height={15} />
            <Skeleton variant="rectangular" width={170} height={15} />
            <Skeleton variant="rectangular" width={170} height={15} />
            <Skeleton variant="rectangular" width={130} height={30} />
          </Stack>
        ) : (
          members.map((member) => (
            <CardMember member={member} key={member.id} />
          ))
        )}
      </Grid>
    </div>
  );
}
