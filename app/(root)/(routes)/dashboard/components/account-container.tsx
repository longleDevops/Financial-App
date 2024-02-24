import { dashboardHeaders } from '@/constants'
import { AccountCard } from './index'

const AccountContainer = () => {
  return (
    <div className="flex justify-between">
      {dashboardHeaders.map((item, index) =>
        <AccountCard
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

export default AccountContainer