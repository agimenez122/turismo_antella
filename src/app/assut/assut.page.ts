import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-assut',
  templateUrl: './assut.page.html',
  styleUrls: ['./assut.page.scss'],
})
export class AssutPage implements OnInit {

  constructor(private translate: TranslateService) { }
  audioActivado: any
  audio: any;

  ngOnInit() {
    this.audio = new Audio();
    this.audioActivado=false

    if (this.translate.currentLang==="es"){
      console.log("idioma seleccionado "+this.translate.currentLang);
      this.audio.src = '../assets/audioguias/AZUD_ES.mp3';
    }else{
      console.log("idioma seleccionat "+this.translate.currentLang)
      this.audio.src = '../assets/audioguias/AZUD_CT.mp3';
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