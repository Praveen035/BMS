using IService;
using Microsoft.AspNetCore.Mvc;
using Models.Employee;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employee;
        private readonly IDepartmentService _department;
        public EmployeeController(IEmployeeService employee, IDepartmentService department)
        {
            _employee = employee ??
                throw new ArgumentNullException(nameof(employee));
            _department = department ??
                throw new ArgumentNullException(nameof(department));
        }

        [HttpGet]
        [Route("getemployee")]
        public async Task<IActionResult> Get()
        {
            return Ok(await _employee.GetEmployees());
        }

		[HttpGet("{id}")]
		public async Task<IActionResult> GetEmpByID(int Id)
        {
            return Ok(await _employee.GetEmployeeByID(Id));
        }

        [HttpPost]
        [Route("addemployee")]
        public async Task<IActionResult> Post(EmployeeModel emp)
        {
            var result = await _employee.InsertEmployee(emp);
            if (result.EmployeeID == 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
            }
            return Ok(result);
        }

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody] EmployeeModel emp)
        {
            await _employee.UpdateEmployee(emp);
            return Ok("Updated Successfully");
        }

      
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = _employee.DeleteEmployee(id);
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
