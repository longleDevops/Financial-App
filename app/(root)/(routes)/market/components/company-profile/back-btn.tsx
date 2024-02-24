import { useAnimation } from "@/hooks/use-animation";

const BackBtn = () => {
  const { animatedId, setAnimtedId } = useAnimation()
  const handleClick = () => {
    setAnimtedId(2);
  }
  return (
    <button
      onClick={handleClick}
      className="px-2 py-1 text-sm text-white bg-black">
      Back
    </button>
  )
}

export default BackBtn