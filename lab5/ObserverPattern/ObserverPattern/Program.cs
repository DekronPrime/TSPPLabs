using ObserverPattern;

class Program
{
    static void Main(string[] args)
    {
        Order order = new Order();

        User user1 = new User("Alex");
        User user2 = new User("Helen");

        order.Subscribe(user1);
        order.Subscribe(user2);

        order.ChangeStatus("Pending");
        order.ChangeStatus("Sent");

        order.Unsubscribe(user1);

        order.ChangeStatus("Delivered");
    }
}