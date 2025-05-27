namespace AdapterPattern;

using System;

public class CurrencyAdapter : ICurrencyProvider
{
    private readonly UsdProvider _usdProvider;
    private readonly EurProvider _eurProvider;

    public CurrencyAdapter(UsdProvider usdProvider, EurProvider eurProvider)
    {
        _usdProvider = usdProvider;
        _eurProvider = eurProvider;
    }

    public decimal GetRate(string fromCurrency, string toCurrency)
    {
        if (toCurrency != "UAH")
            throw new NotSupportedException("Only conversion to UAH is supported.");

        return fromCurrency switch
        {
            "USD" => _usdProvider.GetUsdToUah(),
            "EUR" => _eurProvider.GetEurToUah(),
            _ => throw new NotSupportedException($"Conversion from {fromCurrency} not supported.")
        };
    }
}
