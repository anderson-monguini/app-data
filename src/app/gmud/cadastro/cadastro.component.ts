import { Component, OnInit } from '@angular/core';
 
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 
import {GmudService} from '../../services/gmud.service';
 
import {Gmud} from '../../services/gmud';
 
import {Response} from '../../services/response';
 
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-cadastro-gmud',
    templateUrl: './cadastro.component.html',
    styleUrls:["./cadastro.component.css"]
  })

  export class CadastroComponent implements OnInit {
 
    private titulo:string;
    private gmud:Gmud = new Gmud();
 
    constructor(private gmudService: GmudService,
                private router: Router,
                private activatedRoute: ActivatedRoute){}
 
    /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */
    ngOnInit() {
 
      this.activatedRoute.params.subscribe(parametro=>{
 
        if(parametro["codigo"] == undefined){
 
          this.titulo = "Novo Cadastro de Gmud";
        }
        else{
 
          this.titulo = "Editar Cadastro de Gmud";
          this.gmudService.getGmud(Number(parametro["codigo"])).subscribe(res => this.gmud = res);
        }
 
 
      });      
    }

   /*FUNÇÃO PARA SALVAR UM NOVO REGISTRO OU ALTERAÇÃO EM UM REGISTRO EXISTENTE */
   salvar():void {
 
    /*SE NÃO TIVER CÓDIGO VAMOS INSERIR UM NOVO REGISTRO */
    if(this.gmud.codigo == undefined){

      /*CHAMA O SERVIÇO PARA ADICIONAR UMA NOVA PESSOA */
      this.gmudService.addGmud(this.gmud).subscribe(response => {

         //PEGA O RESPONSE DO RETORNO DO SERVIÇO
         let res:Response = <Response>response;

         /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
         E LIMPAR O FORMULÁRIO PARA INSERIR UM NOVO REGISTRO*/
         if(res.codigo == 1){
          alert(res.mensagem);
          this.gmud = new Gmud();
         }
         else{
           /*
           ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
           NO SERVIDOR (CODIGO = 0)*/
           alert(res.mensagem);
         }
       },
       (erro) => {   
         /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
           EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
          alert(erro);
       });

    }
    else{

      /*AQUI VAMOS ATUALIZAR AS INFORMAÇÕES DE UM REGISTRO EXISTENTE */
      this.gmudService.atualizarGmud(this.gmud).subscribe(response => {

      //PEGA O RESPONSE DO RETORNO DO SERVIÇO
      let res:Response = <Response>response;

       /*SE RETORNOU 1 DEVEMOS MOSTRAR A MENSAGEM DE SUCESSO
         E REDIRECIONAR O USUÁRIO PARA A PÁGINA DE CONSULTA*/
      if(res.codigo == 1){
        alert(res.mensagem);
        this.router.navigate(['/consulta-gmud']);
      }
       else{
        /*ESSA MENSAGEM VAI SER MOSTRADA CASO OCORRA ALGUMA EXCEPTION
        NO SERVIDOR (CODIGO = 0)*/
         alert(res.mensagem);
       }
     },
     (erro) => {                    
       /**AQUI VAMOS MOSTRAR OS ERROS NÃO TRATADOS
        EXEMPLO: SE APLICAÇÃO NÃO CONSEGUIR FAZER UMA REQUEST NA API                        */                 
        alert(erro);
     });
    }

  }

}