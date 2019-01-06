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
    console.log('Hello AjustesProvider Provider')
  }

  cargar_storage(){

    let promesa = new Promise((resolve, reject)=> {
      if(this.platform.is('cordova')){
        //Mobile
        console.log('Inicializando Stotrage')
        this.storage.ready().then(
            ()=>{
              console.log('Storage Ready')
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
            console.log('Storage OK')
            this.storage.set('ajustes', this.ajustes)
            console.log('Storage Guardado: ' + this.ajustes)
          }
       )

     }else{
       //Desktop
       localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
     }

  }

}
