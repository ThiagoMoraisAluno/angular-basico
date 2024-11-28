import { CanActivateFn, Router } from '@angular/router';

export const rotaGuard: CanActivateFn = (route, state) => {
  //constante
  const rota = new Router;

  //Redirecionamento
  if(localStorage.getItem('nome') === 'Thiago'){
    return true;
  }else{
    rota.navigateByUrl('/pagina1');
    return false;
  }


};
