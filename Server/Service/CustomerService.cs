using Data;
using IService;
using Microsoft.EntityFrameworkCore;
using Models.Customer;
using Models.Employee;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class CustomerService : ICustomerService
    {
		private readonly DataContext _appDBContext;
		public CustomerService(DataContext context)
		{
			_appDBContext = context ??
				throw new ArgumentNullException(nameof(context));
		}
		public async Task<IEnumerable<CustomerModel>> GetCustomers()
		{
			return await _appDBContext.Customers.ToListAsync();
		}
		public async Task<CustomerModel> GetCustomerByID(int ID)
		{
			return await _appDBContext.Customers.FindAsync(ID);
		}
		public async Task<CustomerModel> InsertCustomer(CustomerModel objCustomer)
		{
			_appDBContext.Customers.Add(objCustomer);
			await _appDBContext.SaveChangesAsync();
			return objCustomer;
		}
		public async Task<CustomerModel> UpdateCustomer(CustomerModel objCustomer)
		{
			_appDBContext.Entry(objCustomer).State = EntityState.Modified;
			await _appDBContext.SaveChangesAsync();
			return objCustomer;
		}
		public bool DeleteCustomer(int ID)
		{
			bool result = false;
			var customer = _appDBContext.Customers.Find(ID);
			if (customer != null)
			{
				_appDBContext.Entry(customer).State = EntityState.Deleted;
				_appDBContext.SaveChanges();
				result = true;
			}
			else
			{
				result = false;
			}
			return result;
		}
	}
}
