using IService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Models.Customer;
using Models.Employee;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
		private readonly ICustomerService _customer;
		private readonly IDepartmentService _department;
		public CustomerController(ICustomerService customer, IDepartmentService department)
		{
			_customer = customer ??
				throw new ArgumentNullException(nameof(customer));
			_department = department ??
				throw new ArgumentNullException(nameof(department));
		}

		[HttpGet]
		[Route("getcustomer")]
		public async Task<IActionResult> Get()
		{
			return Ok(await _customer.GetCustomers());
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetEmpByID(int Id)
		{
			return Ok(await _customer.GetCustomerByID(Id));
		}

		[HttpPost]
		[Route("addcustomer")]
		public async Task<IActionResult> Post(CustomerModel emp)
		{
			var result = await _customer.InsertCustomer(emp);
			if (result.Id == Convert.ToString(0))
			{
				return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
			}
			return Ok(result);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody] CustomerModel cust)
		{
			await _customer.UpdateCustomer(cust);
			return Ok("Updated Successfully");
		}


		[HttpDelete("{id}")]
		public JsonResult Delete(int id)
		{
			var result = _customer.DeleteCustomer(id);
			return new JsonResult("Deleted Successfully");
		}

		[HttpGet]
		[Route("getdepartment")]
		public async Task<IActionResult> GetAllDepartmentNames()
		{
			return Ok(await _department.GetDepartment());
		}
	}
}
