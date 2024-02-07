import { dashboardHeaders } from '@/constants'
import { BalanceCard } from '.'

const AccountValue = () => {
  return (
    <div className="flex justify-between">
      {dashboardHeaders.map((item, index) =>
        <BalanceCard
          key={item.title}
          title={item.title}
          value={item.value}
          percentChange={item.percentChange}
          index={index}
        />
      )}
    </div>
  )
}

export default AccountValue