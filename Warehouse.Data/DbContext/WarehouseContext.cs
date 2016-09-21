using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using Warehouse.Data.Models;

namespace Warehouse.Data.DbContext
{
    public class WarehouseContext : System.Data.Entity.DbContext
    {
        public WarehouseContext() : base("WarehouseContext")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Item> Items { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<Order> Orders { get; set; }


        protected override void OnModelCreating(DbModelBuilder builder)
        {
            builder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}
