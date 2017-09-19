import { ProductService } from './product.service';
import { LoginService } from '../login/login.service';

const productFactory = (loginService: LoginService) => {
    return new ProductService()
}

export let productServiceFactory = {
    provide: ProductService,
    useFactory: productFactory,
    deps: [LoginService]  //tells this factory depends on which service

    //we could have acheieved this by injecting loginservice in product service
    // but why we created  factory since there is no dependency 
    //between them so we should not do hard coupling

    //change detection --- need to find out 
    //toster library for popup

}