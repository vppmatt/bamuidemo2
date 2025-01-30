import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AccessRecord, ServerAccessRecord } from '../model/AccessRecord';
import { Building } from '../model/Building';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  serverUrl = environment.serverUrl;


  getUsers() : Observable<Array<User>> {
    return this.http.get<Array<User>>(`${this.serverUrl}/api/user`);
  }

  // getAccessRecords(date : string) : Observable<Array<AccessRecord>> {
  //   const rawData : Observable<Array<ServerAccessRecord>> = this.http
  //       .get<Array<ServerAccessRecord>>(`${this.serverUrl}/api/logs/${date}?all=true`);

  //   const processedData : Observable<Array<AccessRecord>> = rawData.pipe(  map( originalArray => {
  //       const newArray = originalArray.map( it => ({...it , building : it.building.name}) as AccessRecord);
  //       return newArray;
  //   } ) )

  //   return processedData;
  // }

  getAccessRecords(date : string) : Observable<Array<AccessRecord>> {
    return this.http
        .get<Array<ServerAccessRecord>>(`${this.serverUrl}/api/logs/${date}?all=true`)
        .pipe(  map( originalArray => originalArray.map( it => ({...it , building : it.building.name}) as AccessRecord)
   ) )
  }

  getAccessRecordsForTodayForBuilding(building : string)  : Observable<Array<AccessRecord>> {
    const today = new Date().toISOString().substring(0,10).replaceAll("-","");
    
    return this.getAccessRecords(today).pipe( map(originalArray => originalArray.filter(it => it.building === building)) );

  }

  getBuildings() : Observable<Array<Building>> {
    return this.http.get<Array<Building>>(`${this.serverUrl}/api/building`);
  }

  getUser(id : number) : Observable<User> {
    return this.http.get<User>(`${this.serverUrl}/api/user/${id}`)
  }

}
