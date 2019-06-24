export const dateStringToDate = (dateString: string): Date => {
    let [date, month, year] = dateString.split('/').map(
        (num: string): number => {
            return parseInt(num);
        }
    );
    return new Date(year, month, date);
};
