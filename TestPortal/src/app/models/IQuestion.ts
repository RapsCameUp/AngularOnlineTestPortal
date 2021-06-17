export interface IQuestion{
    question: string;
    answer: { option: string, correct: boolean } [];
}