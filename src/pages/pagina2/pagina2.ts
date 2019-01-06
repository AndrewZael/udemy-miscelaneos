import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  public alertConfirm

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadinCrtl:LoadingController) {
  }
  
  goPage3(){
    this.navCtrl.push( "mi-pagina3" )
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad')
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter')
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter')
  }


  ionViewWillLeave(){
      console.log('ionViewWillLeave')
  }

  ionViewDidLeave(){
      console.log('ionViewDidLeave')
  }

  ionViewWillUnload(){
      console.log('ionViewWillUnload')
  }

  ionViewCanEnter(){
    console.log('ionViewCanEnter')
    let promesa = new Promise ( (resolve, reject) => {
      this.alertConfirm = this.alertCtrl.create({
        title: '¿Seguro que quieres abandonar esta página?',
        message: 'Seleccione una opción',
        buttons: [
          {
            text:'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'OK',
            handler: ()=> resolve(true)
          }
        ]
      })
      this.alertConfirm.present()
    })
    return promesa
    /*let numero = Math.round(Math.random() * 10)
    if(numero >= 3){
      return true
    }else{
      return false
    }*/
  }

  ionViewCanLeave(){
    console.log('ionViewCanLeave')
    console.log('Espere 3 segundos para salir')

    let preloading = this.loadinCrtl.create({
      content: 'Porfavor espere un momento',
      duration: 3000
    })
    preloading.present()

    let promesa = new Promise((resolve, reject) => {
       setTimeout( ()=>{
         preloading.dismiss()
         resolve(true)
       },3000)
    })

    return promesa
  }

}
