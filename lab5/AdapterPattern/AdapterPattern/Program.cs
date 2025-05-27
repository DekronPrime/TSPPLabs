using AdapterPattern;

class Program
{
    static void Main(string[] args)
    {
        var usdApi = new UsdProvider();
        var eurApi = new EurProvider();

        var adapter = new CurrencyAdapter(usdApi, eurApi);

        Console.WriteLine("Currency converter to UAH:");

        Console.WriteLine("1 USD = " + adapter.GetRate("USD", "UAH") + " UAH");
        Console.WriteLine("1 EUR = " + adapter.GetRate("EUR", "UAH") + " UAH");
    }
}