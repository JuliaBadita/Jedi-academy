import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const MembersContentLoader = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="circular" width={140} height={140} />
      <Skeleton variant="rectangular" width={190} height={24} />
      <Skeleton variant="rectangular" width={170} height={15} />
      <Skeleton variant="rectangular" width={170} height={15} />
      <Skeleton variant="rectangular" width={170} height={15} />
      <Skeleton variant="rectangular" width={130} height={30} />
    </Stack>
  );
};

export default MembersContentLoader;
