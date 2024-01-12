using Helper.Filters;
using IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
	[TokenAuthenticationFilter]
	public class DepartmentController : ControllerBase
    {
            private readonly IDepartmentService _department;
            public DepartmentController(IDepartmentService department)
            {
                _department = department ??
                    throw new ArgumentNullException(nameof(department));
            }

            [HttpGet]
            [Route("getdepartment")]
            public async Task<IActionResult> Get()
            {
                return Ok(await _department.GetDepartment());
            }

		    [HttpGet("{id}")]
		    public async Task<IActionResult> GetDeptById(Guid Id)
            {
                return Ok(await _department.GetDepartmentByID(Id));
            }

            [HttpPost]
            [Route("adddepartment")]
            public async Task<IActionResult> Post(DepartmentModel dep)
            {
			    dep.DepartmentId = Guid.NewGuid();
			    var result = await _department.InsertDepartment(dep);
                if (result.DepartmentId == null)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
                }
                return Ok("Added Successfully!");
            }

		     [HttpPut("{id}")]
		     public async Task<IActionResult> Put(Guid id, [FromBody] DepartmentModel dep)
             {
                await _department.UpdateDepartment(dep);
                return Ok("Updated Successfully!");
             }

		     [HttpDelete("{id}")]
		     public JsonResult Delete(Guid id)
              {
                _department.DeleteDepartment(id);
                return new JsonResult("Deleted Successfully!");
              }
      }
}
