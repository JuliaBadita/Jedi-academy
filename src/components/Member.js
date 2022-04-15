import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";

export default function Member() {
  const { id } = useParams();
  let [memberState, setMember] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/members/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMember(res);
        setIsLoading(true);
      });
  });
  return (
    <div>
      <h1>{isLoading ? memberState.data.attributes.title : "Loading..."}</h1>
    </div>
  );
}
