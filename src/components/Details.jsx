import React, { useEffect, useState } from "react";

export default function Details({ info }) {
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (info.id) {
      fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
      )
        .then((response) => response.json())
        .then((user) => {
          setUser(user);
          setLoading(false);
        });
    }
  }, [info]);

  return (
    user.id && (
      <div className="details">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="details-imgbox">
              <img className="details-img" src={user.avatar} alt="" />
            </div>
            <h2 className="details-title">{user.name}</h2>
            <div className="details-city">City: {user.details.city}</div>
            <div className="details-company">
              Company: {user.details.company}
            </div>
            <div className="details-position">
              Position: {user.details.position}
            </div>
          </>
        )}
      </div>
    )
  );
}
