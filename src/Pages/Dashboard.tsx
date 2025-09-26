import DashboardLayout from "@/components/layout/Layout"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,245</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$12,430</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
