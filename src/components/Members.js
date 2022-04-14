import React, { useEffect, useState } from "react";
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
        setMembers(response.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Liste des membres</h1>
      <div>
        {isLoading
          ? "Loading.."
          : members.map((member) => <h2>{member.attributes.title}</h2>)}
      </div>
    </div>
  );
}
