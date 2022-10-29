import React, { memo, useEffect, useState } from "react";
import { request } from "@/services";
const Home = memo(() => {
  const [highScore, setHighScore] = useState({ list: [] });
  useEffect(() => {
    request
      .get({
        url: "/home/highscore",
      })
      .then((res: any) => {
        console.log(res);
        setHighScore(res);
      });
  }, []);
  return (
    <div>
      {highScore.list?.map((item: any) => {
        return <img key={item.id} src={item.picture_url} />;
      })}
    </div>
  );
});

export default Home;
