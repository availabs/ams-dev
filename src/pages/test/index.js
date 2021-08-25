import React from "react"

const TestComp = props => {
console.log("PROPS:", props)
  return (
    <div className="h-full container mx-auto py-8">
      Test Comp
    </div>
  )
}

const testConfig = {
  path: "/test",
  mainNav: true,
  name: "Test Page",
  auth: true,
  layoutSettings: {
    fixed: true,
    nav: 'side',
    headerBar: false,
    userMenu: "nav"
  },
  component: {
    type: TestComp,
    wrappers: ["with-auth"]
  }
}
export default testConfig;
