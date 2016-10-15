export default class CircleDataRepository {
  static saveCircleState(shimaId, circleId, state) {
    localStorage[`${shimaId},${circleId}`] = state;
  }

  static allCircleEntries() {
    let circleEntries = localStorage.circleEntries;
    if (!circleEntries) {
      circleEntries = '[]';
    }
    return JSON.parse(circleEntries);
  }

  static pushCircleEntry(name, place, remark) {
    const newEntry = {
      name,
      place,
      remark,
    };

    const circleEntries = this.allCircleEntries();
    circleEntries.push(newEntry);
    localStorage.circleEntries = JSON.stringify(circleEntries);
  }
}
