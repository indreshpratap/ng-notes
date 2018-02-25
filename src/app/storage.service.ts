import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {

    storeJSON(key:string,data:any) {
    localStorage.setItem(key,JSON.stringify(data));
    }

    fetchJSON(key:string) {
        let data = localStorage.getItem(key);
        if(data){
            return JSON.parse(data);
        }else {
            return data;
        }
    }

    clear(key:string) {
        localStorage.removeItem(key);
    }
}