using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Warehouse.Data.Models;

namespace Warehouse.Data.DbContext
{
    public class WarehouseInitializer : DropCreateDatabaseAlways<WarehouseContext>
    {
        protected override void Seed(WarehouseContext context)
        {
            var items = new List<Item>
            {
                new Item {Name = "Coca Cola"},
                new Item {Name = "Sprite"},
                new Item {Name = "Jamnica"},
                new Item {Name = "Kava"}
            };
            items.ForEach(item => context.Items.Add(item));
            context.SaveChanges();

            var orderItems = new List<OrderItem>
            {
                new OrderItem {Amount = 3, Item = context.Items.Single(item => item.Id == 0)},
                new OrderItem {Amount = 5, Item = context.Items.Single(item => item.Id == 1)},
                new OrderItem {Amount = 2, Item = context.Items.Single(item => item.Id == 2)},
                new OrderItem {Amount = 4, Item = context.Items.Single(item => item.Id == 1)},
                new OrderItem {Amount = 1, Item = context.Items.Single(item => item.Id == 0)},
                new OrderItem {Amount = 2, Item = context.Items.Single(item => item.Id == 2)}
            };
            orderItems.ForEach(orderItem => context.OrderItems.Add(orderItem));
            context.SaveChanges();

            var orders = new List<Order>
            {
                new Order {Delivered = true, Items = context.OrderItems.Where(orderItem => orderItem.Id < 3).ToList()},
                new Order {Delivered = false, Items = context.OrderItems.Where(orderItem => orderItem.Id == 3).ToList()},
                new Order {Delivered = true, Items = context.OrderItems.Where(orderItem => orderItem.Id > 3).ToList()}
            };
            orders.ForEach(order => context.Orders.Add(order));
            context.SaveChanges();
        }
    }
}
