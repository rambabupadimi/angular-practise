import { Accessability } from "./angular-accessability/accessability/accessability";
import { Accessability1 } from "./angular-accessability/accessability1/accessability1";
import { Accessability2 } from "./angular-accessability/accessability2/accessability2";
import { Accessability3 } from "./angular-accessability/accessability3/accessability3";

 export const accessbilityRoutes = [
  {
    path: '',
    component: Accessability,
    children : [
      {
        path:'',
        redirectTo:'one',
        pathMatch:'full'
      },
      {
        path:'one',
        component: Accessability1
      },
      {
        path:'two',
        component: Accessability2
      },
            {
        path:'three',
        component: Accessability3
      }
    ]
  }
]

