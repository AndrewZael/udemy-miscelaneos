import { Injectable } from '@angular/core'
import { Storage  } from '@ionic/storage'
import { Platform } from 'ionic-angular'

@Injectable()
export class AjustesProvider {
  
  ajustes = {
     mostrar_tutorial: true
  }
  constructor(private platform:Platform,
              private storage:Storage) {
  }

  cargar_storage(){

    let promesa = new Promise((resolve, reject)=> {
      if(this.platform.is('cordova')){
        //Mobile
        this.storage.ready().then(
            ()=>{
              this.storage.get('ajustes').then(
                config=>{
                  if(config){
                    this.ajustes = config
                  }
                  resolve()
                }
              )
            }
        )

      }else{
        //Desktop
        if(localStorage.getItem('ajustes')){
          this.ajustes = JSON.parse(localStorage.getItem('ajustes'))
        }
        resolve()
      }
    })

    return promesa

  }

  guardar_storage(){
     if(this.platform.is('cordova')){
       //Mobile
       this.storage.ready().then(
          ()=> {
            this.storage.set('ajustes', this.ajustes)
          }
       )

     }else{
       //Desktop
       localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
     }

  }

}
