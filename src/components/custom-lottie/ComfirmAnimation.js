import "./confirm-animation.css";
import React from "react";
import Lottie from "react-lottie";
import checkAnimation from "../../animation/checked/checked-done.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: checkAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const ConfirmAnimation = props => {
  if (!props.hidden) {
    return (
      <div className="checked-animation">
        <Lottie
          options={defaultOptions}
          height={350}
          width={350}
          isClickToPauseDisabled={true}
        />
      </div>
    );
  } else {
    return <div />;
  }
};

export default ConfirmAnimation;
