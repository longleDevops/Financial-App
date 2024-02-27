import { Button } from "@/components/shadcn-ui/button"
import { ArrowLeft, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ExecutiveCard from "./executive-card"
import EmployeeCard from "./employee-card"
import CompanyDetails from "./company-details"
import { Company, Logo } from "@prisma/client"
import BackBtn from "./back-btn"
export interface CompanyProfile {
  company: Company & Logo
}

const executives = [
  {
    name: "Adam",
    role: "Chef Executive",
    avatarImg: "/avatars/ava1.png",
  },
  {
    name: "Jessi",
    role: "President",
    avatarImg: "/avatars/ava2.png",
  },
  {
    name: "Lingard",
    role: "Executive",
    avatarImg: "/avatars/ava3.png",
  },
]

const numOfEmployees = [
  {
    amount: "50+",
    name: "Staff"
  },
  {
    amount: "$70,000+",
    name: "Avg Salary"
  },
  {
    amount: "90+",
    name: "Staff"
  }

]

export const CompanyProfile = ({ company }: CompanyProfile) => {

  return (

    <div className="p-8 ">
      <div className="flex justify-between">
        <BackBtn />
        <p className="text-base font-semibold underline text-muted-foreground">Tesla Inc.</p>
      </div>

      <div className="max-h-[800px] overflow-y-auto mt-8">
        <div className="grid grid-cols-2 gap-8 border border-red-700">
          <div className="p-8 bg-white rounded-lg h-[320px] w-[320px] items-center flex flex-col text-sm gap-3">
            <div className="flex justify-between w-full">
              <h1>CEO</h1>
              <h1>Icon</h1>
            </div>
            <Image
              alt="CEO image"
              src="/employees/tsla-ceo.png"
              width={100}
              height={100}
              className="object-cover bg-red-400 rounded-full min-h-[100px]"
            />
            <div className="flex flex-col items-center py-2">
              <h1>Elon Musk</h1>
              <h2>TechnoKing of Tesla, CEO & Director</h2>
              <Link
                href={"https://www.tesla.com"}
              >
                view site
              </Link>
            </div>
            <div className="flex gap-2">
              <Twitter />
              <Facebook />
              <Instagram />
            </div>
          </div>

          <div className="bg-muted-foreground/10 rounded-lg h-[320px] w-[320px] ml-auto flex flex-col px-8 py-4">
            <p>CEO & Executives</p>
            <div className="flex justify-between gap-2 mt-4">
              {executives.map((item, index) => (
                <ExecutiveCard employee={item} key={index} />
              ))}
            </div>

            <p>Employees</p>
            <div className="flex justify-between gap-2 mt-4">
              {numOfEmployees.map((item, index) => (
                <EmployeeCard data={item} key={index} />
              ))}
            </div>
            <div></div>
          </div>
        </div>
        <div className="bg-white h-[1000px] w-full">
          <CompanyDetails
            foundCompany={company}
          />
        </div>
      </div>
    </div>

  )
}