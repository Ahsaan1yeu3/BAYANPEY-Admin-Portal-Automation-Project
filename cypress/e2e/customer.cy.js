import Loginpage from "../support/pages/Loginpage"
// import Dashboardpage from "../support/pages/Dashboardpage"
import OnboardedPage from "../support/pages/onboardedpage"
import CustomerOrder from "../support/pages/Customersorder"

describe('Login and Dashboard Page Test', () => {
  const loginpage = new Loginpage()
  // const dashboardpage = new Dashboardpage()
  const Onboarded = new OnboardedPage()
  const customerorder=new CustomerOrder()
  it('Login and validate dashboard contents', () => {
    loginpage.visit()
    loginpage.enterusername('admin@lovefordata.com')
    loginpage.enterpassword('Admin@123')
    loginpage.clicklogin()

    // Ab already dashboard pe ho — alag se visit() ki zarurat nahi
    // dashboardpage.h1()
    // dashboardpage.h2()
    // dashboardpage.TotalCustomers()
    // dashboardpage.TotalTransaction()
    // dashboardpage.TotalOrders()
    // dashboardpage.TotalRepayments()
    // dashboardpage.RepaymentStatus()
    // dashboardpage.AverageOrderAmount()
    // dashboardpage.RepaymentsOverTime()
    // dashboardpage.OrdersOverTime()
    // dashboardpage.UserRolesDistribution()
    // dashboardpage.FinanceAccountOverTime()
    // dashboardpage.Footer()

    Onboarded.h1()
    Onboarded.h2()
    Onboarded.search('Ahsaan Mini Mart')
    Onboarded.dropdown()
    Onboarded.dropdown()
    Onboarded.clearfilter()
    Onboarded.exportcsv()
    Onboarded.customerlist()
    Onboarded.Footer()

    customerorder.visit()
    customerorder.customersearch('104')
    customerorder.selectdivision()
     customerorder.selectsales()
     customerorder.selectpayment()
     customerorder.clearfilter()
     customerorder.exportcsv()
     customerorder.Footer()
      customerorder.Totalcount()
  
   
   

})
})
