import { Route, Routes } from '@angular/router';


export const appRoutes: Route[] = [


    {
        path:'demo',
        loadChildren: () => import('./angular-data-binding/angular-data-binding.module').then(m=>m.AngularDataBindingModule)
    },
    {
        path:'change-detection',
        loadChildren: () => import('./angular-change-detection/angular-change-detection-routing.module').then(m=>m.AngularChangeDetectionRoutingModule)
    },

    {
        path:'sample',
        loadChildren: () => import('./angular-caching/angular-caching.module').then(m=>m.AngularCachingModule)
    },

    {
        path:'view-child',
        loadChildren: () => import('./angular-viewchild/angular-viewchild.module').then(m=>m.AngularViewchildModule)
    },

    {
        path:'decorators',
        loadChildren: () => import('./angular-decorators/angular-decorators.module').then(m=>m.AngularDecoratorsModule)
    },

    {
        path:'forms',
        loadChildren: () => import('./angular-forms/angular-forms.module').then(m=>m.AngularFormsModule)
    },
    {
        path:'life-cycle',
        loadChildren: () => import('./angular-life-cycles/angular-life-cycles.module').then(m=>m.AngularLifeCyclesModule)
    },
    {
        path:'directives',
        loadChildren: () => import('./angular-directives/angular-directives.module').then(m=>m.AngularDirectivesModule)
    },
    {
        path:'pipes',
        loadChildren: () => import('./angular-pipes/angular-pipes.module').then(m=>m.AngularPipesModule)
    },
    // {
    //     path:'view-encapsulation',
    //     loadChildren: () => import('./angular-view-encapsulation/angular-view-encapsulation.module').then(m=>m.AngularViewEncapsulationModule)
    // },
    // {
    //     path:'guards',
    //     loadChildren: () => import('./angular-guards/angular-guards.module').then(m=>m.AngularGuardsModule)
    // },
    {
        path:'service',
        loadChildren: () => import('./angular-services/angular-services.module').then(m=>m.AngularServicesModule)
    },
    {
        path:'rxjs',
        loadChildren: () => import('./angular-promise-observables/angular-promise-observables.module').then(m=>m.AngularPromiseObservablesModule)
    },
    {
        path:'unit-testing',
        loadChildren: () => import('./angular-unit-testing/angular-unit-testing-routing.module').then(m=>m.AngularUnitTestingRoutingModule)
    },
    {
        path:'dynamic-components',
        loadChildren: () => import('./angular-dynamic-components/angular-dynamic-components.module').then(m=>m.AngularDynamicComponentsModule)
    },
    {
        path:'deferable-view',
        loadChildren: () => import('./deferable-views/deferable-views.module').then(m=>m.DeferableViewsModule)
    },
    {
        path:'templates',
        loadChildren: () => import('./angular-template/angular-template.module').then(m=>m.AngularTemplateModule)
    }

];