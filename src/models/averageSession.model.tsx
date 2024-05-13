export interface AverageSession {
    userId: number;
    sessions: AverageSessionData[];
}

export interface AverageSessionData {
    day: number;
    sessionLength: number;
}