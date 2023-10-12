export interface Expense {
    id: string
    title: string
    amount: number
    date: Date
}

export interface ExpenseFormData {
    title: string
    amount: number
    date: Date
}