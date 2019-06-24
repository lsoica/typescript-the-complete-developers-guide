import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResults } from './MatchResult';

type MatchData = [Date, string, string, number, number, MatchResults, string];
export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public filename: string) {}

    read(): void {
        this.data = fs
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map(
                (row: string): string[] => {
                    return row.split(',');
                }
            )
            .map(
                (rows: string[]): MatchData => {
                    return [dateStringToDate(rows[0]), rows[1], rows[2], parseInt(rows[3]), parseInt(rows[4]), rows[5] as MatchResults, rows[6]];
                }
            );
    }
}
