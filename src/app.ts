import { app, App, BrowserWindow } from 'electron';
import * as Phaser from 'phaser';


class ElectronPhaser {

    private app: App
    private mainWindow: BrowserWindow;
    gameConfig;
    phaserGame

    constructor() {
        this.app = app;
        this.init();;
    }

    init() {

        this.app.on('ready', event => {
            console.log('ready')
            this.mainWindow = new BrowserWindow({
                width: 600,
                height: 800
            });
            // this.mainWindow.loadURL('https://analytics.forceteller.com')

            (window as any) = this.mainWindow
            this.gameConfig = {
                type: Phaser.CANVAS,
                width: 2000,
                height: 1200,
                zoom: 0.6,
                physics: {
                    default: 'arcade',
                    arcade: {
                        gravity: {
                            y: 200
                        }
                    }

                },

                parent: 'game-canvas',
                scene: [
                    // this.menuScene,
                    // this.stageScene
                ]
            }
            this.phaserGame = new Phaser.Game(this.gameConfig)


        })
        this.app.on('before-quit', event => {

        })
        this.app.on('window-all-closed', event => {
            this.app.quit();
        })
        this.app.on('activate', (event, hasVisibleWindows) => {
            // Mac OS에서만 발생되는 이벤트임.


        })
    }


    static bootstrap() {
        return new ElectronPhaser()
    }

}

ElectronPhaser.bootstrap()