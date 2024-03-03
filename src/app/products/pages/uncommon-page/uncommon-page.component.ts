import { Component } from '@angular/core';
import { Observable, interval, tap, timeout } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = 'Elvis';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female:'invitarla'
  }

  public changeClient():void{
    this.name = "Ketsy";
    this.gender = "female";
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Pedro','Ramon','Ernesto','Sofia'];
  public clientsMap = {
    '=0': 'No tenemos cliente esperando',
    '=1': 'Actualmente tenemos un cliente a la espera',
    'other': 'Actualmente tenemos # clientes a la espera'
  }
  public deleteClient():void{
    this.clients.shift();
  }


  // KeyValue
  public person = {
    name: 'Elvis',
    age:40,
    address: 'Santiago'
  };

  // Async Pipe
  public myObservableTimer:Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log('tap: ',value)
      )
    );

  public promiseValue:Promise<string> = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Promesa');

    },3500)
  })

}
