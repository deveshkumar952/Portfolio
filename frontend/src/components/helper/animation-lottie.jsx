import Lottie from "react-lottie-player";

const AnimationLottie = ({ animationPath }) => {
  return (
    <Lottie
      loop
      animationData={animationPath}
      play
      style={{ width: "95%" }}
    />
  );
};

export default AnimationLottie;