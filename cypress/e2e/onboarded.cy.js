import Loginpage from "../support/pages/Loginpage"
// import Dashboardpage from "../support/pages/Dashboardpage"
import OnboardedPage from "../support/pages/onboardedpage"
import testdata from "../fixtures/testdata.json"


describe('Login and Dashboard Page Test', () => {
  const loginpage = new Loginpage()
  // const dashboardpage = new Dashboardpage()
  const Onboarded = new OnboardedPage()
  it('Login and validate dashboard contents', () => {
    loginpage.visit()
    loginpage.enterusername(testdata.login.username)
    loginpage.enterpassword(testdata.login.password)
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
    Onboarded.search(testdata.onboarded.searchTerm)
    Onboarded.dropdown()
    Onboarded.dropdown()
    Onboarded.clearfilter()
    Onboarded.exportcsv()
    Onboarded.customerlist()
    Onboarded.Footer()
  
   
   

})
})
