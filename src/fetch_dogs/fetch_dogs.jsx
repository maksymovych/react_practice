import React, { useEffect, useState } from "react";
import ImgMediaCard from "../utiles/ImgMediaCard/ImgMediaCard";

function FetchDogs() {
  const dogAPI = "https://dog.ceo/api/breeds/image/random";
  const buttonLabel = "change picture";
  const [imgURL, setImgURL] = useState("");

  const ButtonAction = () => {
    fetch(dogAPI)
      .then((response) => {
        if (response) {
          console.log("resp", response);
          return response.json();
        }
        throw response;
      })
      .then((response) => {
        setImgURL(response.message);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    ButtonAction();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <ImgMediaCard imgURL={imgURL} ButtonAction={ButtonAction}>
        {buttonLabel}
      </ImgMediaCard>
    </div>
  );
}

export default FetchDogs;
