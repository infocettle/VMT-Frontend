import React from 'react'
import { Outlet, useRoutes } from 'react-router-dom'
import Plans from './PlansRoute'
import Differentiators from './Differentiators'
import Discount from './DiscountRoute'
import Charge from './ChargesRoute'
import Commissions from './CommissionsRoute'
import ServiceListing from './ServiceListing'

const PlansPricesRoute = () => {
  const routes = useRoutes([
    { path: "plans", element: <Plans/> },
    { path: "differentiators", element: <Differentiators/> },
    { path: "discount", element: <Discount/> },
    { path: "charges", element: <Charge/> },
    { path: "commissions", element: <Commissions/> },
    { path: "service_listing", element: <ServiceListing/> }
  ])

  return routes || <Outlet />
}

export default PlansPricesRoute
