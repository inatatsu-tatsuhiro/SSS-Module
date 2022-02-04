import { SignedTransaction, Transaction } from 'symbol-sdk'

export interface SSS {
  setTransaction: (tx: Transaction) => void
  requestSign: () => Promise<SignedTransaction>
}
