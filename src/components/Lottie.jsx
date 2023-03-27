import { useLottie } from 'lottie-react';

const style = {
  opacity: 3,
  width: '9rem',
  height: '9rem',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
};

const LottieAnimation = () => {
  const options = {
    path: 'https://assets4.lottiefiles.com/packages/lf20_5gSEVkmCCC.json',
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default LottieAnimation;
