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

		private readonly ICustomerService _customerService;
		private readonly IDepartmentService _departmentService;

		public CustomerController(ICustomerService customerService, IDepartmentService departmentService)
		{
			_customerService = customerService ?? 
				throw new ArgumentNullException(nameof(customerService));
			_departmentService = departmentService ?? 
				throw new ArgumentNullException(nameof(departmentService));
		}

		[HttpGet]
		[Route("getcustomer")]
		public async Task<IActionResult> Get()
		{
			return Ok(await _customerService.GetCustomers());
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetEmpByID(Guid Id)
		{
			return Ok(await _customerService.GetCustomerByID(Id));
		}

		[HttpPost]
		[Route("addcustomer")]
		public async Task<IActionResult> Post(CustomerModel emp)
		{
			emp.Id = Guid.NewGuid();
			var result = await _customerService.InsertCustomer(emp);
			if (result.Id == null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
			}
			return Ok(result);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(Guid id, [FromBody] CustomerModel cust)
		{
			await _customerService.UpdateCustomer(cust);
			return Ok("Updated Successfully");
		}

		[HttpDelete("{id}")]
		public JsonResult Delete(Guid id)
		{
			var result = _customerService.DeleteCustomer(id);
			return new JsonResult("Deleted Successfully");
		}

		[HttpGet]
		[Route("getdepartment")]
		public async Task<IActionResult> GetAllDepartmentNames()
		{
			return Ok(await _departmentService.GetDepartment());
		}
	}
}
