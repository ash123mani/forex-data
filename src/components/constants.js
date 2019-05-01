export const queryType = {
  name: "choiceType",
  errorMessage: "Please select a option",
  placeholder: "Select your Choice",
  optionClass: "live-data__option",
  data: ["Exchange Rate", "Intraday", "Daily", "Weekly", "Monthly"]
};

export const fromCurrency = {
  name: "fromCurrency",
  errorMessage: "Please select a currency",
  placeholder: "From currency",
  optionClass: "live-data__fromCurrency",
  data: [
    "BTC (Bit Coin)",
    "USD  (US Dollar)",
    "EUR (Eurozone Euro)",
    "JPY (Japan Yen)",
    "GBP (Great Britian  Pound)",
    "CHF (Switzerland Franc)",
    "CAD (Canda Dollar)",
    "AUD (Australia Dollar)",
    "NZD (New Zealand  Dollar)",
    "INR (India Rupee)"
  ]
};

export const toCurrency = {
  name: "toCurrency",
  errorMessage: "Please select a currency",
  placeholder: "To currency",
  optionClass: "live-data__toCurrency",
  data: [
    "BTC (Bit Coin)",
    "USD  (US Dollar)",
    "EUR (Eurozone Euro)",
    "JPY (Japan Yen)",
    "GBP (Great Britian  Pound)",
    "CHF (Switzerland Franc)",
    "CAD (Canda Dollar)",
    "AUD (Australia Dollar)",
    "NZD (New Zealand  Dollar)",
    "INR (India Rupee)"
  ]
};

export const timeInterval = {
  name: "timeInterval",
  errorMessage: "Please Select atime interval",
  placeholder: "Select a time interval",
  optionClass: "live-data__timeInterval",
  data: ["1min", "5min", "15min", "30min", "60min"]
};
