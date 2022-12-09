import { InjectionKey } from 'vue'
import { Rules, Values } from 'async-validator'

export type FormData = {
    model: Record<string, unknown>,
    rules?: Rules
}

export type FormItem = {
    vaildate: () => Promise<Values>
}

export type FormType = {
    validate: (cb: (isVaild: boolean) => void) => void
}

export const key: InjectionKey<FormData> = Symbol('form-data')