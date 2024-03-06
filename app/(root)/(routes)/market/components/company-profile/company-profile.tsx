import { Button } from "@/components/shadcn-ui/button"
import { ArrowLeft, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ExecutiveCard from "./executive-card"
import EmployeeCard from "./employee-card"
import CompanyDetails from "./company-details"
import { Company } from "@prisma/client"
import BackBtn from "./back-btn"
import { insiderHolder } from "./company-details"
export interface CompanyProfile {
  company: Company
}

export const CompanyProfile = ({ company }: CompanyProfile) => {
  const insiderHolders = company.yahooStockV2Summary.insiderHolders
  const arrHolders = insiderHolders.holders

  const numOfEmployees = [
    {
      amount: company.yahooStockV2Summary.summaryProfile.fullTimeEmployees + '+',
      name: "Employees"
    },
    {
      amount: '$' + company.yahooStockV2Summary.financialData.totalRevenue.fmt,
      name: "Revenue"
    },
    {
      amount: "90+",
      name: "Staff"
    }

  ]
  const executives = [
    {
      name: arrHolders[0]?.name || "N/A",
      role: arrHolders[0]?.relation || "",
      shares: arrHolders[0]?.positionDirect?.fmt || "N/A",
      avatarImg: "/avatars/ava1.png",
    },
    {
      name: arrHolders[1]?.name || "N/A",
      role: arrHolders[1]?.relation || "",
      shares: arrHolders[1]?.positionDirect?.fmt || "N/A",
      avatarImg: "/avatars/ava2.png",
    },
    {
      name: arrHolders[2]?.name || "N/A",
      role: arrHolders[2]?.relation || "",
      shares: arrHolders[2]?.positionDirect?.fmt || "N/A",
      avatarImg: "/avatars/ava3.png",
    },
  ]
  return (

    <div className="p-8 text-sm">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Image
            src={`/logos/${company.symbol}.svg`}
            alt="company logo"
            width={35}
            height={35}
            className="object-contain"
          />
          <div>
            <p className="text-lg font-semibold">{company.yahooStockV2Summary.price.shortName}</p>
            <p className="text-muted-foreground text-sm">{company.symbol}</p>
          </div>
        </div>
        <BackBtn />
      </div>
      <div className="mt-4">
        <div className=" text-xl font-semibold border-b border-muted-foreground/30 mb-12"></div>

        <div className="flex gap-8">
          <div className="p-8 rounded-lg h-[320px] w-[320px] items-center flex flex-col text-sm gap-3 shadow-xl dark:shadow-purple-500 dark:shadow-sm">
            <div className="flex justify-between w-full">
              <h1>CEO</h1>
              <h1>Icon</h1>
            </div>
            <Image
              alt="CEO image"
              src="/employees/tsla-ceo.png"
              width={70}
              height={70}
              className="object-cover bg-zinc-300/20 rounded-full min-h-[70px]"
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

          </div>

          <div className=" rounded-lg h-[320px] flex-1 flex flex-col px-6 pb-4 pt-4 justify-between shadow-xl ">
            <div className="flex justify-between gap-2 mt-4">
              {executives.map((item, index) => (
                <ExecutiveCard employee={item} key={index} />
              ))}
            </div>
            <div className="flex justify-between gap-2 mt-4">
              {numOfEmployees.map((item, index) => (
                <EmployeeCard data={item} key={index} />
              ))}
            </div>
            <div></div>
          </div>
        </div>
        <div className=" h-[1200px] w-full mt-8">
          <CompanyDetails
            foundCompany={company}
          />
        </div>
      </div>
    </div>

  )
}