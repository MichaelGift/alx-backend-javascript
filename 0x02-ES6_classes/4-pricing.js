import Currency from './3-currency';

export default class Pricing {
  /**
     * Creates a {@link Pricing}
     * @param amount - the cost
     * @param currency - the currency ie Dollars of euros
     */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
     * Return the amount
     * @returns {*}
     */
  get amount() {
    return this._amount;
  }

  /**
     * Set the amount
     * @param value
     */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * @returns {Currency}
   */
  get currency() {
    return this._currency;
  }

  /**
   * @param {Currency} value
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  /**
     * Show the price of an item
     * @returns {string}
     */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
     * Convert price from one currency to another
     * @param amount - the cost
     * @param conversionRate - exchange rate
     * @returns {number} - price in the new currency
     */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
