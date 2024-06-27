import Building from './5-building';

export default class SkyHighBuilding extends Building {
  /**
     * Create a {@link SkyHighBuilding}
     * @param sqft - area of ground the building covers
     * @param floors - floors the building has
     */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  /**
     * Show an evacuation message
     * @returns {string}
     */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
