namespace ObserverPattern;

using System.Collections.Generic;

public class Order
{
    private string _status;
    private List<IObserver> _observers = new List<IObserver>();

    public void Subscribe(IObserver observer)
    {
        _observers.Add(observer);
    }

    public void Unsubscribe(IObserver observer)
    {
        _observers.Remove(observer);
    }

    public void ChangeStatus(string newStatus)
    {
        _status = newStatus;
        Notify($"Order status has been changed to: {_status}");
    }

    private void Notify(string message)
    {
        foreach (var observer in _observers)
        {
            observer.Update(message);
        }
    }
}
