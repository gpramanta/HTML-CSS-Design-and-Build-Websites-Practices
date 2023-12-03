class JournalAnalysis {
  constructor(journal) {
    this.journal = journal;
    this.arr = [];
  }

  addEntry(events, squirrel) {
    this.journal.push({events, squirrel});
  }

  tableFor(event) {
    let table = [0, 0, 0, 0]; /* [(No wolf, No pizza), (No wolf, pizza), (wolf, No pizza), (wolf, pizza)] */
    for (let i = 0; i < this.journal.length; i++) {
      let entry = this.journal[i], index = 0;
      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
  }

  phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }

  journalEvents() {
    let events = [];
    for (let entry of this.journal) {
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
  }

  max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
      if (number > result) result = number;
    }
    return result;
  }
}

class SymmetricAnalysis extends JournalAnalysis {
  constructor(journal) {
    super(journal);
  }

  correlatedEvents() {
    for (let event of super.journalEvents(this.journal)) {
      let correlation = super.phi(super.tableFor(event, this.journal)), 
      obj = {};
      if (correlation > 0.1 || correlation < -0.1) {
        obj[event] = correlation;
        this.arr.push(obj);
      }
    }
    let result;
    for (let i = 0; i < this.arr.length; i++) {
      if (super.max(Object.values(this.arr[i])[0])) result = Object.keys(this.arr[i])[0];
    }
    alert(`${result} may cause you to become squirrel.`);
  }
}

let symmetricAnalysis = new SymmetricAnalysis(JOURNAL);