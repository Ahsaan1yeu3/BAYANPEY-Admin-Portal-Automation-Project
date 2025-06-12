import Loginpage from "../support/pages/Loginpage"
import Dashboardpage from "../support/pages/Dashboardpage"
import OnboardedPage from "../support/pages/onboardedpage"
import CustomerOrder from "../support/pages/Customersorder"
import Adminuser from "../support/pages/adminuser"
import Transaction from "../support/pages/Transaction"
import Repayment from "../support/pages/Repayment"
import otp from "../support/pages/otp"

import testdata from "../fixtures/testdata.json"

describe('Automation Testing of Bayanpey', () => {
  const loginpage = new Loginpage()
  const dashboardpage = new Dashboardpage()
  const Onboarded = new OnboardedPage()
  const customerorder = new CustomerOrder()
  const adminuser = new Adminuser()
  const transaction = new Transaction()
  const repayment = new Repayment()
  const Otp = new otp()

  beforeEach(() => {
    // Login before every test
 
 
    loginpage.visit()
    loginpage.enterusername(testdata.login.username)
    loginpage.enterpassword(testdata.login.password)
    loginpage.clicklogin()
  })


  

  it('Dashboard Page Testing', () => {
    dashboardpage.h1()
    dashboardpage.h2()
    dashboardpage.TotalCustomers()
    dashboardpage.TotalTransaction()
    dashboardpage.TotalOrders()
    dashboardpage.TotalRepayments()
    dashboardpage.RepaymentStatus()
    dashboardpage.AverageOrderAmount()
    dashboardpage.RepaymentsOverTime()
    dashboardpage.OrdersOverTime()
    dashboardpage.UserRolesDistribution()
    dashboardpage.FinanceAccountOverTime()
    dashboardpage.Footer()
  })

  it('Onboarded Page Testing', () => {
    Onboarded.visit()
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

  it('Customer Order Page Testing', () => {
    customerorder.visit()
    customerorder.customersearch(testdata.customerorder.customerId)
    customerorder.selectdivision()
    customerorder.Footer()
  })

  it('Admin User Page Testing', () => {
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
  })

  it('Transaction Page Testing', () => {
    transaction.visit()
    transaction.h1()
    transaction.h2()
    transaction.filter(testdata.transaction.filterId)
    transaction.search()
    transaction.clearfilter()
    transaction.export()
  })

  it('Repayment Page Testing', () => {
    repayment.visit()
    repayment.h1()
    repayment.h2()
    repayment.search(testdata.repayment.searchTerm)
    repayment.paymentverified()
    repayment.selectpaymentmethod()
    repayment.paymentstatus()
    repayment.clearfilter()
  })

  it('OTP and Profile Testing', () => {
    Otp.visit()
    Otp.entermobileno(testdata.otp.mobileNo)
    Otp.radiobuttons()
    Otp.fetchotp()
    Otp.Admin()
    Otp.profile()
    Otp.signout()
  })
})
