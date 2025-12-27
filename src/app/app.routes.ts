import { inject } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { AuthorService } from './angular-unit-testing/author.service';
import { Accessability } from './angular-accessability/accessability/accessability';
import { Accessability1 } from './angular-accessability/accessability1/accessability1';
import { Accessability2 } from './angular-accessability/accessability2/accessability2';
import { Accessability3 } from './angular-accessability/accessability3/accessability3';


export const appRoutes: Route[] = [


  {
    path: 'data-binding',
    loadChildren: () => import('./angular-data-binding/angular-data-binding.module').then(m => m.AngularDataBindingModule)
  },
  {
    path: 'change-detection',
    loadChildren: () => import('./angular-change-detection/angular-change-detection-routing.module').then(m => m.AngularChangeDetectionRoutingModule)
  },

  {
    path: 'sample',
    loadChildren: () => import('./angular-caching/angular-caching.module').then(m => m.AngularCachingModule)
  },

  {
    path: 'view-child',
    loadChildren: () => import('./angular-viewchild/angular-viewchild.module').then(m => m.AngularViewchildModule)
  },

  {
    path: 'decorators',
    loadChildren: () => import('./angular-decorators/angular-decorators.module').then(m => m.AngularDecoratorsModule)
  },

  {
    path: 'forms',
    loadChildren: () => import('./angular-forms/angular-forms.module').then(m => m.AngularFormsModule)
  },
  {
    path: 'life-cycle',
    loadChildren: () => import('./angular-life-cycles/angular-life-cycles.module').then(m => m.AngularLifeCyclesModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./angular-directives/angular-directives.module').then(m => m.AngularDirectivesModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./angular-pipes/angular-pipes.module').then(m => m.AngularPipesModule)
  },
  {
    path: 'view-encapsulation',
    loadChildren: () => import('./angular-view-encapsulation/angular-view-encapsulation.module').then(m => m.AngularViewEncapsulationModule)
  },
  // {
  //     path:'guards',
  //     loadChildren: () => import('./angular-guards/angular-guards.module').then(m=>m.AngularGuardsModule)
  // },
  {
    path: 'service',
    loadChildren: () => import('./angular-services/angular-services.module').then(m => m.AngularServicesModule)
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./angular-promise-observables/angular-promise-observables.module').then(m => m.AngularPromiseObservablesModule)
  },
  {
    path: 'unit-testing',
    loadChildren: () => import('./angular-unit-testing/angular-unit-testing-routing.module').then(m => m.AngularUnitTestingRoutingModule)
  },
  {
    path: 'dynamic-components',
    loadChildren: () => import('./angular-dynamic-components/angular-dynamic-components.module').then(m => m.AngularDynamicComponentsModule)
  },
  {
    path: 'deferable-view',
    loadComponent: () => import('./deferable-views/deferable/deferable.component').then(m => m.DeferableComponent)
  },
  {
    path: 'templates',
    loadChildren: () => import('./angular-template/angular-template.module').then(m => m.AngularTemplateModule)
  },
  {
    path: 'css',
    loadComponent: () => import('./css-best-practise/css-best-practise.component').then(m => m.CssBestPractiseComponent)
  },
  {
    path: 'signal',
    loadComponent: () => import('./angular-signal/basic-signal/basic-signal.component').then(m => m.BasicSignalComponent)
  },
  {
    path: 'linked-signal',
    loadComponent: () => import('./angular-linked-signal/angular-linked-signal/angular-linked-signal.component').then(m => m.AngularLinkedSignalComponent)
  },
  {
    path: 'angular-signal-io',
    loadComponent: () => import('./angular-singal-io/parent/parent.component').then(m => m.ParentComponent)
  },
  {
    path: 'control-flow',
    loadComponent: () => import('./angular-control-flows/angular-control-flows.component').then(m => m.AngularControlFlowsComponent)
  },
  {
    path: 'resource-api',
    loadComponent: () => import('./angular-resource-api/angular-resource-api.component').then(m => m.AngularResourceApiComponent)
  },
  {
    path: 'redirect',
    redirectTo: () => {
      const auth = inject(AuthorService);
      if (auth.isLoggedIn()) {
        return '/route-redirect';
      }
      return '/route-redirect';
    }
  },
  {
    path: 'route-redirect',
    loadComponent: () => import('./route-redirect/route-redirect').then(m => m.RouteRedirect)
  },
  {
    path: 'input-signals',
    loadComponent: () => import('./angular-input-signal/angular-input-signal.component').then(m => m.AngularInputSignalComponent)
  },
  {
    path: 'reusable',
    loadComponent: () => import('./angular-reusable/angular-reusable').then(m => m.AngularReusable)
  },
  // {
  //   path:'todos',
  //   loadChildren: () => import('./angular-ngrx/angular-ngrx.module').then(m=>m.AngularNgrxModule)
  // }

  {
    path: 'todos',
    loadComponent: () => import('./angular-todo/todo/todo').then(m => m.Todo)
  },
  {
    path: 'counter',
    loadComponent: () => import('./angular-counter/counter/counter').then(m => m.Counter)
  },
  {
    path: 'posts',
    loadComponent: () => import('./angular-posts/posts/posts').then(m => m.Posts)
  },
  {
    path: 'ngrx-component-store-posts',
    loadComponent: () => import('./angular-ngrx-component-store-posts/posts.component').then(m => m.PostsComponent)
  },
  {
    path: 'security',
    loadComponent: () => import('./angular-security/angular-security/angular-security').then(m => m.AngularSecurity)
  },
  {
    path: 'cart',
    loadComponent: () => import('./angular-cart/cart/cart').then(m => m.Cart)
  },
  {
    path: 'accessability',
    loadComponent: () => import('./angular-accessability/accessability/accessability').then(m => m.Accessability),
    children: [
      {
        path: '',
        redirectTo: 'one',
        pathMatch: 'full'
      },
      {
        path: 'one',
        component: Accessability1
      },
      {
        path: 'two',
        component: Accessability2
      },
      {
        path: 'three',
        component: Accessability3
      }
    ]
  },
  {
    path: 'render',
    loadComponent: () => import('./angular-render/angular-render').then(m => m.AngularRender)
  },
  {
    path: 'pi',
    loadComponent: () => import('./angular-pi/angular-pi').then(m => m.AngularPi)
  }


];


