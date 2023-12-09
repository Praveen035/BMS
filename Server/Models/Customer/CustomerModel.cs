using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Customer
{
    public class CustomerModel
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public int PostalCode { get; set; }
        public int Country { get; set; }
        public string? PhoneNumber { get; set; }
    }
}
