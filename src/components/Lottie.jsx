import { useLottie } from 'lottie-react'

const style = {
  opacity: 3,
  width: '9rem',
  height: '9rem',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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