import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  data: any = [
    { path: '1', text: 'Hugo Bellard fez o arranjo de "Você Não Me Ensinou a Te Esquecer" do Fernando Mendes que está ao lado dele na foto.A música foi mais tarde regravada pelo Caetano Veloso.'},
    { path: '2', text: 'A trilha do filme "Quando Eu Era Vivo" de 2014 com Antonio Fagundes e Sandy possui música de autoria, arranjada e produzida por Hugo Bellard.'},
    { path: '3', text: '  Com arranjos do maestro Hugo Bellard, responsável pelo site MusikCity, o album "Tábuas das Esmeraldas" de Jorge Ben Jor foi eleito pela revista inglesa Rolling Stones como um dos 6 melhores álbuns gravados no Brasil em todos os tempos.'},
    { path: '4', text: ' Nando e Kiko, da banda Roupa Nova, tendo ao centro o produtor e maestro Hugo Bellard, em foto recente na casa de um deles.Música de Hugo Bellard cantada pelo Serginho do Roupa Nova, entrou na novela Pecado Rasgado'},
    { path: '5', text:'Mariozinho Rocha Até pouco tempo era o Diretor musical das novelas da TV Globo. Agora ocupa a presidência da ABRAMUS, Sociedade de Compositores ligada ao Ecade.Por isso ainda mantém uma grande influência no envio de músicas para as novelas.'},
    { path: '6', text:'O sucesso e disco de platina "Sonhos" (peninha) é mais um arranjo de Hugo Bellard.'},
    { path: '7', text:'O cantor Wando gravou "Me Cace Me Ache", de Hugo Bellard e Paulo Sérgio Valle, além de outra música da dupla - "Não Posso Ser Teu Amigo".O album foi o de maior vendagem na carreira do Wando.'},
    { path: '8', text:'O cantor José Augusto gravou seus primeiros grandes sucessos com arranjos de Hugo Bellard na Emi.Dois deles, a música "Meu Primeiro Amor" (Mi Primer Amor) e Candilejas, entraram na parada do México e na latina da Billboard vendendo mais de dois milhão de álbuns em 5 países'},
    { path: '9', text:' Elizangela gravou a música mais vendida em compacto simples no Brasil em todos os tempos: "Pertinho de Você", em produção, arranjo e autoria de Hugo Bellard.'},
    { path: '10', text:'O sucesso "Meu Sangue Ferve Por Você" com Sidney Magal é arranjo de Hugo Bellard em gravação para a Universal Music - Polygram.'}
  ]
}


