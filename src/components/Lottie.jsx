import { useLottie } from 'lottie-react'

const style = {
  opacity: 3,
  width: '8rem',
  height: '8rem',
  position: 'absolute',
  marginLeft:'5rem'
}

const LottieAnimation = () => {
  const options = {
    path: 'https://assets4.lottiefiles.com/packages/lf20_5gSEVkmCCC.json',
    loop: false,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default LottieAnimation