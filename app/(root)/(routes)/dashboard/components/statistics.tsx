const headers = [
  "Company Name:",
  "Symbol Ticker:",
  "Current Price:",
  "Open:",
  "High:",
  "Low:"

]

export const Statistics = () => {
  return (
    <>
      <div className="bg-white w-full h-full mt-8 px-8 pt-6 text-lg font-semibold">
        <p>Overview</p>
        <div className="flex flex-col gap-2">
          {headers.map((item, index) => (
            <div className="flex gap-2">
              <p>{item}</p>
              <p>{index}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}