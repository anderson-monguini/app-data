import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
 
import {Gmud} from '../services/gmud';
import {ConfigService} from './config.service';
 
@Injectable()
export class GmudService {

    private baseUrlService:string = '';
    private headers:Headers;
    private options:RequestOptions;
 
    constructor(private http: Http, private configService: ConfigService) {
     
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/gmud/';
 
        /*ADICIONANDO O JSON NO HEADER */
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });                
        this.options = new RequestOptions({ headers: this.headers });
    }
    /**CONSULTA TODAS AS GMUDS CADASTRADAS */
    
    /**
    getGmud(){        
        return this.http.get(this.baseUrlService).map(res => res.json());
    } 
    */
 
    /**ADICIONA UMA NOVA GMUD */
    addGmud(gmud: Gmud){
 
        return this.http.post(this.baseUrlService, JSON.stringify(gmud),this.options)
        .map(res => res.json());
    }
    /**EXCLUI UMA GMUD */
    excluirGmud(codigo:number){
 
        return this.http.delete(this.baseUrlService + codigo).map(res => res.json());
    }
 
    /**CONSULTA UMA GMUD PELO CÓDIGO */
    getGmud(codigo:number){
 
        return this.http.get(this.baseUrlService + codigo).map(res => res.json());
    }
 
    /**ATUALIZA INFORMAÇÕES DA GMUD */
    atualizarGmud(gmud:Gmud){
 
        return this.http.put(this.baseUrlService, JSON.stringify(gmud),this.options)
        .map(res => res.json());
    }
 
}