using SingletonPattern;

class Program
{
    private static void Main(string[] args)
    {
        var resourceManager = ResourceManager.Instance;

        resourceManager.AddImage("logo", "/assets/logo.png");
        resourceManager.AddFont("main", "Roboto");
        resourceManager.AddData("version", "1.0.0");

        Console.WriteLine("Image path: " + resourceManager.GetImage("logo"));
        Console.WriteLine("Font: " + resourceManager.GetFont("main"));
        Console.WriteLine("App version: " + resourceManager.GetData("version"));
    }
}