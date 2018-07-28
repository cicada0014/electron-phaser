import { app, App, BrowserWindow } from 'electron';



class ElectronPhaser {

    private app: App

    constructor() {
        this.app = app;
        this.init();;
    }

    init() {

        this.app.on('ready', event => {
            console.log('ready')
        })
        this.app.on('before-quit', event => {

        })
    }


    static bootstrap() {
        return new ElectronPhaser()
    }

}

ElectronPhaser.bootstrap()