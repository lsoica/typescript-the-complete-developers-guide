import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResult';

export abstract class CsvFileReader<DataType> {
    data: DataType[] = [];

    constructor(public filename: string) {}

    read() {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(
                (row: string): string[] => {
                    return row.split(',');
                }
            )
            .map(this.mapRow);
    }

    abstract mapRow(row: string[]): DataType;
}
