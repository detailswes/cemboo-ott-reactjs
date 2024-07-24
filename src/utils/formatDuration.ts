export default function formatDuration(value: number): string {
    const seconds = value % 60;
    const minutes = Math.floor((value % 3600) / 60);
    const hours = Math.floor(value / 3600);

    if (hours > 0) {
        return `${hours}h ${minutes}min ${seconds}sec`;
    } else if (minutes > 0) {
        return `${minutes}min ${seconds}sec`;
    } else {
        return `${seconds}sec`;
    }
}
