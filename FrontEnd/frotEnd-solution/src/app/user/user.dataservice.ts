import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestService } from "src/app/services/request.service";
import { ResponseDTO } from "src/app/services/response.dto";
import { User } from "./user";

@Injectable()
export class UserDataService {
    constructor(private requestService: RequestService) {
    }

    public getAll(): Observable<ResponseDTO> {
        return this.requestService.getApi('api/Usuario/getAll');
    }

    public getById(userId: number): Observable<ResponseDTO> {
        const params: any = [{ key: "id", value: userId }];
        return this.requestService.getApi("api/Usuario/getById", params);
    }

    public create(user: User): Observable<ResponseDTO> {
        return this.requestService.postApi("api/Usuario/Create", user);
    }

    public update(user: User): Observable<ResponseDTO> {
        return this.requestService.postApi("api/Usuario/Update", user);
    }

    public delete(user: User): Observable<ResponseDTO> {
        return this.requestService.postApi("api/Usuario/Delete", user);
    }

}
