import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { AjustesProvider } from '../providers/ajustes/ajustes'

import { HomePage } from '../pages/home/home'
import { IntroPage } from '../pages/intro/intro'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage:any
  public mostrarTutorial:boolean

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private _ajustes:AjustesProvider) {
    platform.ready().then(() => {
      
      this._ajustes.cargar_storage()
                .then( ()=> {
                    if(this._ajustes.ajustes.mostrar_tutorial){
                      this.rootPage = IntroPage
                    }else{
                      this.rootPage = HomePage
                    }
                    statusBar.styleDefault();
                    splashScreen.hide();
              })
    });
  }
}

