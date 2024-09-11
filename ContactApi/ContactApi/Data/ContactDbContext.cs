using ContactApi.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace ContactApi.Data
{
    public class ContactDbContext : DbContext
    {
        public ContactDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Contact> Contacts {  get; set; }  

    }
}
