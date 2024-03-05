import Script from 'next/script'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>{children}</section>
      <Script src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" />
    </>
  )
}