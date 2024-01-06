using Models.Customer;
using Models.Employee;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IService
{
	public interface ICustomerService
	{
		Task<IEnumerable<CustomerModel>> GetCustomers();
		Task<CustomerModel> GetCustomerByID(int ID);
		Task<CustomerModel> InsertCustomer(CustomerModel objCustomer);
		Task<CustomerModel> UpdateCustomer(CustomerModel objCustomer);
		bool DeleteCustomer(int ID);
	}
}
