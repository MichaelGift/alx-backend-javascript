/**
 * Represents a Currency
 */
export default class Currency {
  /**
     * Creates a new @see {@link Currency}
     * @param {String} code - The symbol representation ie $
     * @param {String} name - The name of the currency ie Kuwaiti Dinar
     */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
