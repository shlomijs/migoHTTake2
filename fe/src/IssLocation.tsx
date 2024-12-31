import React, { useState } from "react";
import { useQuery } from "react-query";
import { Button, Box, Typography } from "@mui/material";
import LeafletISSMap from "./LeafletISSMap";
import { fetchISSLocation } from "./utils";
import { REFETCH_INTERVAL } from "./config";

const IssLocation: React.FC = () => {
  const [lastUpdate, setLastUpdate] = useState<string>("");

  const { data, refetch, isFetching } = useQuery(
    "issLocation",
    fetchISSLocation,
    {
      refetchInterval: REFETCH_INTERVAL, // Automatically refetch every 15 seconds
      onSuccess: () => setLastUpdate(new Date().toLocaleTimeString()),
    }
  );

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        ISS Tracker
      </Typography>

      {data ? (
        <>
          <LeafletISSMap latitude={data.latitude} longitude={data.longitude} />
          <Typography mt={2}>
            Latitude: {data.latitude}, Longitude: {data.longitude}
          </Typography>
          <Typography>Last Updated: {lastUpdate}</Typography>
        </>
      ) : (
        <Typography>Loading...</Typography>
      )}

      <Button
        variant="contained"
        onClick={() => refetch()}
        disabled={isFetching}
        sx={{ mt: 2 }}
      >
        {isFetching ? "Refreshing..." : "Refresh Now"}
      </Button>
    </Box>
  );
};

export default IssLocation;
