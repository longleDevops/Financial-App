import { Company, Logo } from "@prisma/client"

interface CompanyDetailsProps {
  foundCompany: Company & Logo
}


const CompanyDetails = ({ foundCompany }: CompanyDetailsProps) => {
  const targetData = foundCompany.yahooStockV2Summary
  const overview = targetData.price;
  const summary = targetData.summaryProfile
  const unixTimestamp = targetData.price.regularMarketTime
  const regularTime = new Date(unixTimestamp * 1000).toUTCString()
  const headers = [
    "Company",
    "Zip",
    "City",
    "Phone",
    "State",
    "Country",
    "Website",
    "Address",
    "Industry",
    "Sector",
    "Description",


  ]

  const data = [
    overview.longName,
    summary.zip,
    summary.city,
    summary.phone,
    summary.state,
    summary.country,
    summary.website,
    summary.address1,
    summary.industry,
    summary.sector,
    summary.longBusinessSummary,

  ]

  return (
    <div>
      <h1>Updated at {regularTime}</h1>
      <h1>Company Overview</h1>
      {headers.map((item, index) => (
        <div className="flex gap-4">
          <p className="w-[150px]">{item}</p>
          <p className="max-w-[500px] max-h-[200px] overflow-auto">{data[index]}</p>
        </div>
      ))}
    </div>
  )
}

export default CompanyDetails