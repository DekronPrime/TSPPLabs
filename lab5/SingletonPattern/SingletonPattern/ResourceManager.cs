namespace SingletonPattern;

using System.Collections.Generic;

public class ResourceManager
{
    private static ResourceManager _instance;
    private static readonly object _lock = new object();
    
    private Dictionary<string, string> _images;
    private Dictionary<string, string> _fonts;
    private Dictionary<string, string> _data;
    
    private ResourceManager()
    {
        _images = new Dictionary<string, string>();
        _fonts = new Dictionary<string, string>();
        _data = new Dictionary<string, string>();
    }
    
    public static ResourceManager Instance
    {
        get
        {
            lock (_lock)
            {
                if (_instance == null)
                    _instance = new ResourceManager();
                return _instance;
            }
        }
    }

    public void AddImage(string key, string path) => _images[key] = path;
    public void AddFont(string key, string font) => _fonts[key] = font;
    public void AddData(string key, string value) => _data[key] = value;

    public string GetImage(string key) => _images.TryGetValue(key, out var val) ? val : "Image not found";
    public string GetFont(string key) => _fonts.TryGetValue(key, out var val) ? val : "Font not found";
    public string GetData(string key) => _data.TryGetValue(key, out var val) ? val : "Data not found";
}
