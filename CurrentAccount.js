import { Client } from "./Client.js";

export class CurrentAccount {
    static numberOfAccounts = 0;
    _client;
    agency;
    _balance = 0;

    constructor(client,agency) {
        this.client = client;
        this.agency = agency;
        CurrentAccount.numberOfAccounts += 1;
    }

    withdrawMoney(value) {
        if (this._balance >= value) {
            this._balance -= value;
            return value;
        }
    }

    deposit(value) {
        if (value <= 0) return;
        this._balance += value;
    }

    transfer(value, account) {
        const amountWithdrawn = this.withdrawMoney(value);
        account.deposit(amountWithdrawn);
    }

    set client(newValue) {
        if (newValue instanceof Client) {
            this._client = newValue;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }
}