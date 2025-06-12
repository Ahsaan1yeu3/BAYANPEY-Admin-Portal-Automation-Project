/// <reference types="cypress" />
import testdata from "../fixtures/testdata.json"

import Loginpage from "../support/pages/Loginpage"

describe('Login Test', () => {
  const loginpage = new Loginpage()

  it('Login with valid credentials', () => {
    loginpage.visit()
    loginpage.enterusername(testdata.login.username)
    loginpage.enterpassword(testdata.login.password)
    loginpage.clicklogin()
  })
})
