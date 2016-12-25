export default class CircleDataRepository {
  static findCircleState(shimaId, circleId) {
    const clazz = localStorage[(`${shimaId},${circleId}`)];
    if (clazz) {
      return localStorage[(`${shimaId},${circleId}`)];
    }
    return '';
  }

  static allCircleEntries() {
    let circleEntries = localStorage.circleEntries;
    if (!circleEntries) {
      circleEntries = '[]';
    }

    try {
      return JSON.parse(circleEntries);
    } catch(e) {
      localStorage.circleEntries = '';
      return [];
    }
  }

  static findCircleEntry(shimaId, circleId) {
    const entries = this.allCircleEntries();
    return entries.find(entry => entry.circleId === circleId && entry.shimaId === shimaId);
  }

  static deleteCircleEntry(shimaId, circleId) {
    const entries = this.allCircleEntries();

    for (let i = 0; i <= entries.length - 1; i += 1) {
      if (entries[i].circleId === circleId && entries[i].shimaId === shimaId) {
        entries.splice(i, 1);
        i -= 1;
      }
    }

    localStorage.clear();
    localStorage.circleEntries = JSON.stringify(entries);
  }

  static pushCircleEntry(name, place, remark, shimaId, circleId, clazz) {
    const newEntry = {
      name,
      place,
      remark,
      shimaId,
      circleId,
      clazz,
    };

    const entries = this.allCircleEntries();

    for (let i = 0; i <= entries.length - 1; i += 1) {
      if (entries[i].circleId === circleId && entries[i].shimaId === shimaId) {
        entries.splice(i, 1);
        i -= 1;
      }
    }

    localStorage.clear();
    entries.push(newEntry);
    localStorage.circleEntries = JSON.stringify(entries);
  }
}
