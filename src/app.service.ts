import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  clients = [
    { id: 1, rut: "89873550", name: "LARA RENE PETTY BERGER" },
    { id: 2, rut: "86833361", name: "CONWAY LANDRY POLLARD BRADLEY" },
    { id: 3, rut: "88271452", name: "MICHELLE LETITIA BATTLE MOONEY" },
    { id: 4, rut: "87252013", name: "SIMMONS NELSON WITT MONROE" },
    { id: 5, rut: "81706494", name: "BRADY MARY RANDALL FERNANDEZ" },
    { id: 6, rut: "71167355", name: "ACOSTA COLE ATKINSON PITTS" },
    { id: 7, rut: "79093176", name: "DOMINGUEZ HOUSE GONZALES SALAZAR" },
    { id: 8, rut: "91361017", name: "KIRSTEN COLLINS BYERS COFFEY" },
    { id: 9, rut: "9065642K", name: "FIELDS RATLIFF MORRIS QUINN" }
  ];

  banks = [
    { id: 1, name: 'SCOTIABANK' },
    { id: 2, name: 'BCI' },
    { id: 3, name: 'ITAU' },
    { id: 4, name: 'CONDELL' },
  ];

  accounts = [
    { clientId: 4, bankId: 1, balance: 79069 },
    { clientId: 6, bankId: 3, balance: 136060 },
    { clientId: 9, bankId: 3, balance: 74908 },
    { clientId: 2, bankId: 2, balance: 4391 },
    { clientId: 6, bankId: 2, balance: 116707 },
    { clientId: 1, bankId: 3, balance: 157627 },
    { clientId: 5, bankId: 4, balance: 136372 },
    { clientId: 5, bankId: 4, balance: 149670 },
    { clientId: 2, bankId: 3, balance: 143321 },
    { clientId: 2, bankId: 4, balance: 67466 },
    { clientId: 2, bankId: 3, balance: 17956 },
    { clientId: 9, bankId: 2, balance: 43194 },
    { clientId: 5, bankId: 1, balance: 52245 },
    { clientId: 6, bankId: 2, balance: 41562 },
    { clientId: 3, bankId: 2, balance: 138046 },
    { clientId: 6, bankId: 3, balance: 196964 },
    { clientId: 8, bankId: 3, balance: 73803 },
    { clientId: 9, bankId: 2, balance: 150402 },
    { clientId: 7, bankId: 1, balance: 122869 },
    { clientId: 5, bankId: 4, balance: 65223 },
    { clientId: 7, bankId: 3, balance: 143589 },
    { clientId: 9, bankId: 3, balance: 43346 },
    { clientId: 2, bankId: 1, balance: 60421 },
    { clientId: 4, bankId: 4, balance: 184110 },
    { clientId: 8, bankId: 4, balance: 195903 },
    { clientId: 5, bankId: 2, balance: 77649 },
    { clientId: 8, bankId: 4, balance: 28170 },
    { clientId: 5, bankId: 1, balance: 132850 },
    { clientId: 1, bankId: 3, balance: 139679 },
    { clientId: 7, bankId: 4, balance: 119808 },
    { clientId: 4, bankId: 4, balance: 109201 },
    { clientId: 9, bankId: 3, balance: 112529 },
    { clientId: 1, bankId: 3, balance: 137914 },
    { clientId: 6, bankId: 2, balance: 122904 },
    { clientId: 5, bankId: 4, balance: 103142 },
    { clientId: 8, bankId: 2, balance: 69163 },
    { clientId: 2, bankId: 4, balance: 57812 },
    { clientId: 2, bankId: 3, balance: 32851 },
    { clientId: 7, bankId: 1, balance: 109763 },
    { clientId: 8, bankId: 3, balance: 147442 },
    { clientId: 9, bankId: 1, balance: 42217 },
    { clientId: 1, bankId: 1, balance: 39658 },
    { clientId: 6, bankId: 2, balance: 8664 },
    { clientId: 8, bankId: 1, balance: 41915 },
    { clientId: 7, bankId: 1, balance: 31879 },
    { clientId: 7, bankId: 4, balance: 117795 },
    { clientId: 1, bankId: 4, balance: 108862 },
    { clientId: 5, bankId: 1, balance: 18550 },
  ];
    

  exercise0() {
    return this.clients.map(client =>client.id);
  }
  exercise1() {
    let aux, i, k;
    const n = this.clients.length
    for(k=1; k<n; k++) {
      for(i=0;i < (n - k); i++) {
        if (this.clients[i].rut > this.clients[i + 1].rut) {
          aux = this.clients[i]
          this.clients[i] = this.clients[i + 1];
          this.clients[i + 1] = aux;
        }
      }
    }
    return this.clients.map(client =>client.id);
  }
  exercise2() {
    let newArr = [];
    this.clients.forEach(c => {
      let obj = {};
      let cont = 0;
      this.accounts.forEach(cta => {
        if (c.id == cta.clientId) {
          cont = cont + cta.balance;
          obj = {
            nombre: c.name,
            total: cont
          }
        }
      });
      newArr.push(obj);
    });
  
    // ordenarlos
    let aux, i, k;
    const n = newArr.length
    for(k=1; k<n; k++) {
      for(i=0;i < (n - k); i++) {
        if (newArr[i].total > newArr[i + 1].total) {
          aux = newArr[i]
          newArr[i] = newArr[i + 1];
          newArr[i + 1] = aux;
        }
      }
    }
    return newArr.map(client =>client.nombre);
  }
  exercise3() {
    let newArr = [];
    let obj: any = {};
    this.banks.forEach(banco => {
      obj = {
        id: banco.name,
        valor: []
      }
      this.accounts.forEach(cta => {
        if (banco.id == cta.bankId) {
          if (!obj.valor.includes(cta.clientId)) {
            obj.valor.push(cta.clientId);
          }
        }
      });
      newArr.push(obj);
    });
    return newArr
  }
  exercise4() {
    const filteredClients = [];
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      const client = this.clients.find(c => c.id === account.clientId);
      const bank = this.banks.find(b => b.id === account.bankId);
      if (account.balance > 25000 && bank.name === 'SCOTIABANK') {
        filteredClients.push(account);
      }
    }
    for (let i = 0; i < filteredClients.length - 1; i++) {
      for (let j = i + 1; j < filteredClients.length; j++) {
        if (filteredClients[j].balance > filteredClients[i].balance) {
          const temp = filteredClients[i];
          filteredClients[i] = filteredClients[j];
          filteredClients[j] = temp;
        }
      }
    }
    const balances = [];
    for (let i = 0; i < filteredClients.length; i++) {
      balances.push(filteredClients[i].balance);
    }
    return balances;
  }
  exercise5() {
    const bankTotals = {};
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      const bankId = account.bankId;
      const balance = account.balance;
      if (bankTotals[bankId]) {
        bankTotals[bankId] += balance;
      } else {
        bankTotals[bankId] = balance;
      }
    }
    const sortedBanks = [];
    for (let bankId in bankTotals) {
      sortedBanks.push({ bankId: bankId, total: bankTotals[bankId] });
    }
    for (let i = 0; i < sortedBanks.length - 1; i++) {
      for (let j = i + 1; j < sortedBanks.length; j++) {
        if (sortedBanks[i].total > sortedBanks[j].total) {
          const temp = sortedBanks[i];
          sortedBanks[i] = sortedBanks[j];
          sortedBanks[j] = temp;
        }
      }
    }
    const bankIds = sortedBanks.map(bank => Number(bank.bankId));
    return bankIds;

  }
  exercise6() {
    const bankClientCount = {};
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      const bankId = account.bankId;
      const clientId = account.clientId;
      if (bankClientCount.hasOwnProperty(bankId)) {
        if (bankClientCount[bankId].hasOwnProperty(clientId)) {
          bankClientCount[bankId][clientId] += 1;
        } else {
          bankClientCount[bankId][clientId] = 1;
        }
      } else {
        bankClientCount[bankId] = { [clientId]: 1 };
      }
    }
    const uniqueBankClients = {};
    for (let bankId in bankClientCount) {
      uniqueBankClients[bankId] = Object.keys(bankClientCount[bankId]).filter(
        clientId => bankClientCount[bankId][clientId] === 1
      );
    }
    const bankClientCountObj = {};
    for (let bankId in uniqueBankClients) {
      const bankName = this.banks.find(bank => bank.id === Number(bankId)).name;
      bankClientCountObj[bankName] = uniqueBankClients[bankId].length;
    }
    return bankClientCountObj;
  }
  exercise7() {
    const bankMinClient = {};
    for (let i = 0; i < this.accounts.length; i++) {
      const account = this.accounts[i];
      const bankId = account.bankId;
      const clientId = account.clientId;
      const balance = account.balance;
      if (bankMinClient.hasOwnProperty(bankId)) {
        if (balance < this.accounts.find(acc => acc.clientId === bankMinClient[bankId]).balance) {
          bankMinClient[bankId] = clientId;
        }
      } else {
        bankMinClient[bankId] = clientId;
      }
    }
    const bankMinClientObj = {};
    for (let bankId in bankMinClient) {
      const bankName = this.banks.find(bank => bank.id === Number(bankId)).name;
      bankMinClientObj[bankName] = bankMinClient[bankId];
    }
    console.log(bankMinClientObj);
  }

}
