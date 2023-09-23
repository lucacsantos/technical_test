import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GridService<T> {

    public CurrentGridPage: number;
    public DataSourceCollection: BehaviorSubject<T[]>;

    public numberOfRecords!: number;
    public currentGridPage!: number;
    public numberOfRecordsPerGridPage: number;
    public CurrentObjectSelected: any;

    constructor() {
        this.CurrentGridPage = 1;
        this.DataSourceCollection = new BehaviorSubject<T[]>([]);
        this.numberOfRecordsPerGridPage = 5;
        this.CurrentObjectSelected = null;
    }

    public setDataSource(dataSourceCollection: any) {
        this.DataSourceCollection.next(dataSourceCollection);
    }

    public getDataSource(): any[] {
        let array: any = this.DataSourceCollection;
        return array as T[];
    }

    public getData(): any[] {
        let array: any[];
        this.DataSourceCollection
            .subscribe(rows => {
                array = rows as T[]
            })
        return array!;
    }

    public setRowSelected(prObject: T) {
        this.CurrentObjectSelected = prObject;
    }

    public clearDataSource(): any {

        //  this.DataSourceCollection = [];
    }

    public delete(index: number) {
        if (index !== -1) {
        }
    }

    public insert(entity: T) {
        this.DataSourceCollection.value.push(entity);
        this.DataSourceCollection.next(this.DataSourceCollection.value);
    }

    public getNumberOfRecords(): number {
        return 0;
    }
}
