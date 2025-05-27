namespace AdapterPattern;

public interface ICurrencyProvider
{
    decimal GetRate(string fromCurrency, string toCurrency);
}
