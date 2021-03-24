export const ROUTES = [
    {
        path: '',
        loadChildren: () =>
        import('../../modules/buscar/buscar.module').then(m => m.BuscarModule)
    
    }

]