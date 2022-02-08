import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root',})
export class SearchService {
    public search: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public filter: BehaviorSubject<string> = new BehaviorSubject<string>("Todos");
}
