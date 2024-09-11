using ContactApi.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly ContactDbContext dbContext;

        public ContactsController(ContactDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllContacts() 
        {
            var contacts = dbContext.Contacts.ToList();
            return Ok(contacts);
        }
    }
}
