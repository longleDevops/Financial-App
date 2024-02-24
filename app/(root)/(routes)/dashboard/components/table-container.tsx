import { columns, Payment } from "./table/columns"
import { DataTable } from "./index"


async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  const data: Payment[] = []
  for (let i = 0; i < 20; i++) {
    data.push({
      id: "23423423",
      status: "success",
      transactionId: "234234",
      type: "buy tesla",
      amount: 233,
      date: "22-23-2023"
    })
  }
  return data;
}

const TableContainer = async () => {
  const data = await getData()

  return (
    <div className="flex-1 mt-8 border rounded-t-lg border-muted-foreground/30">
      <DataTable
        columns={columns}
        data={data} />
    </div>

  )
}

export default TableContainer