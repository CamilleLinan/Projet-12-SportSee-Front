export interface Activity {
    userId: number;
    sessions: AcitivtySession[];
}

export interface AcitivtySession {
    day: string;
    kilogram: number;
    calories: number;
}