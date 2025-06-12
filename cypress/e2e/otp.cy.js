import Loginpage from "../support/pages/Loginpage"
// import Dashboardpage from "../support/pages/Dashboardpage"
import OnboardedPage from "../support/pages/onboardedpage"
import CustomerOrder from "../support/pages/Customersorder"
import Adminuser from "../support/pages/adminuser"
import Transaction from "../support/pages/Transaction"
import Repayment from "../support/pages/Repayment"
import otp from "../support/pages/otp"

import testdata from "../fixtures/testdata.json"   // Import JSON file

describe('Automation Testing of Bayanpey', () => {
  const loginpage = new Loginpage()
  // const dashboardpage = new Dashboardpage()
  const Onboarded = new OnboardedPage()
  const customerorder = new CustomerOrder()
  const adminuser = new Adminuser()
  const transaction = new Transaction()
  const repayment = new Repayment()
  const Otp = new otp()

  it('Login and Testing the Website of Bayanpey', () => {
    loginpage.visit()
    loginpage.enterusername(testdata.login.username)
    loginpage.enterpassword(testdata.login.password)
    loginpage.clicklogin()

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

    customerorder.visit()
    customerorder.customersearch(testdata.customerorder.customerId)
    customerorder.selectdivision()
     customerorder.selectsales()
     customerorder.selectpayment()
     customerorder.clearfilter()
     customerorder.exportcsv()
     customerorder.Footer()
     customerorder.Totalcount()

   adminuser.visit()
   adminuser.h1()
   adminuser.h2()
   adminuser.Totaluser()
   adminuser.adminuser()
   adminuser.addnewuser()
  adminuser.Name(testdata.adminuser.name)
  adminuser.Email(testdata.adminuser.email)
   adminuser.Designation(testdata.adminuser.designation)
   adminuser.Password(testdata.adminuser.password)
   adminuser.ConfirmPassword(testdata.adminuser.confirmPassword)
   adminuser.cancelbutton()
   adminuser.Totalcount()
   adminuser.Footer()
  
    
   
 transaction.visit()
 transaction.h1()
 transaction.h2()
 transaction.filter(testdata.transaction.filterId)
 transaction.search()
 transaction.clearfilter()
 transaction.export()
 transaction.Totalcount()
 transaction.Footer()

   
 repayment.visit()
 repayment.h1()
 repayment.h2()
 repayment.search(testdata.repayment.searchTerm)
 repayment.paymentverified()
 repayment.selectpaymentmethod()
 repayment.paymentstatus()
 repayment.clearfilter()
 repayment.Totalcount()
 repayment.Footer()

    
    Otp.visit()
    Otp.entermobileno(testdata.otp.mobileNo)
    Otp.radiobuttons()
    Otp.fetchotp()
   Otp.usermanagment()
    
    // Otp.Admin()
    // Otp.profile()
    // Otp.signout()
  })
})
