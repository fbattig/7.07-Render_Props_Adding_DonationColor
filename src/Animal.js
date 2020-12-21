import React from "react";
import Photo from "./Photo";
import AnimalDetails from "./AnimalDetails";
import WrapperComponent from "./WrapperComponent";

const Animal = (props) => {
  const details = props.details;

  return (
    <div>
      {props.children}
      <ul>
        {details.map((detail, index) => (
          <WrapperComponent
            key={index}
            donationAmount={detail.donation}
            render={({ donationColor }) => (
              <AnimalDetails
                donationColor={donationColor}
                image={<Photo path={detail.photo} title={detail.name} />}
                detail={detail}
                key={index}
              />
            )}
          />
        ))}
      </ul>
    </div>
  );
};

export default Animal;
