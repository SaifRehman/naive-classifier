import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeoutWith';
import {config} from '../config/config'
import { IEnvironmentalVariables } from '../../config/env.variables';

@Injectable()
export class HomeService {
    constructor(
        private http: Http
    ){ 
    }

    public post (YearsEmployed,PriorDefault,Credi1Score,Income): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        const link = config.baseUrl+'/predict';
        const bodyObject = {
            YearsEmployed: parseInt(YearsEmployed),
            PriorDefault: parseInt(PriorDefault),
            Credi1Score: parseInt(Credi1Score),
            Income:parseInt(Income)
        };
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}