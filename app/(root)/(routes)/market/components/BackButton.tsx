interface BackButtonProps {
  isBack: boolean,
  setIsBack: (isBack: boolean) => void,
}
const BackButton = ({ isBack, setIsBack }: BackButtonProps) => {
  const handleClick = () => {
    setIsBack(true);
  }
  return (
    <button
      onClick={handleClick}
      className="px-2 py-1 text-sm text-white bg-black">
      Back
    </button>
  )
}

export default BackButton