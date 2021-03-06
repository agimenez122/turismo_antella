import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-torre',
  templateUrl: './torre.page.html',
  styleUrls: ['./torre.page.scss'],
})
export class TorrePage implements OnInit {

  constructor(private translate: TranslateService) { }
  audioActivado: any
  audio: any;

  ngOnInit() {
    this.audio = new Audio();
    this.audioActivado=false

    if (this.translate.currentLang==="es"){
      this.audio.src = '../assets/audioguias/TORRE_ES.mp3';
    }else{
      this.audio.src = '../assets/audioguias/TORRE_CT.mp3';
    }
    this.audio.load();
  }

  playAudio() {
    this.audio.play();
    this.audio.loop = false;
  }

  reproductor(){
    if(this.audioActivado){
      this.audioActivado=false
    }else{
      this.audioActivado=true
    }
  }

  repvisible(){
    return this.audioActivado
  }

  stopAudio() {
    this.audio.pause();
  }

  ngOnDestroy() {
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

}