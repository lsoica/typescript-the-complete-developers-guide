import { OutputTarget } from '../Summary';
import fs from 'fs';
export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
        <html>
            <div>
                <h1>Analysis output</h1>
                <div>${report}</div>
            </div>
        </html>
        `;
        fs.writeFileSync('report.html', html);
    }
}
