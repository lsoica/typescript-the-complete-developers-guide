import { MatchData } from './MatchData';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
    buildAndPrintReport(matchData: MatchData[]) {
        const output = this.analyzer.run(matchData);
        this.outputTarget.print(output);
    }
}
