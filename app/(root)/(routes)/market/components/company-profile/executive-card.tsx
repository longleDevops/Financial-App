import Image from "next/image";

interface ExecutiveProps {
  employee: {
    name: string,
    role: string,
    avatarImg: string
  }
}

const ExecutiveCard = ({ employee }: ExecutiveProps) => {
  const { name, role, avatarImg } = employee;
  return (
    <div className="w-[80px] h-[80px] relative flex flex-col items-center justify-center text-xs bg-white rounded-lg">
      <Image
        alt="avatar"
        src={avatarImg}
        width={30}
        height={30}
        className="absolute mb-[80px] rounded-full"
      />
      <p>{name}</p>
      <p>{role}</p>
    </div>
  )
}

export default ExecutiveCard