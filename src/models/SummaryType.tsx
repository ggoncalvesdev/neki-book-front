export type SummaryType = {
        idSummary: number;
        summary: string;
        usuarios?: {
            id: number;
        };
        leituras?: {
            idLeitura: number;
        }
} 