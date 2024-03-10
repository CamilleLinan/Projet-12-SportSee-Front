export interface ActivityType {
    userId: number;
    sessions: Session[];
}

export interface Session {
    day: string;
    kilogram: number;
    calories: number;
}