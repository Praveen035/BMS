using IService;
using Microsoft.AspNetCore.Mvc;
using Models.Employee;
using Models.Table;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class TableController : ControllerBase
	{
		private readonly ITableService _tableService;
		public TableController(ITableService tableService)
		{
			_tableService = tableService ??
				throw new ArgumentNullException(nameof(tableService));
		}

		[HttpGet]
		[Route("gettable")]
		public async Task<IActionResult> Get()
		{
			return Ok(await _tableService.GetTables());
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetEmpByID(Guid Id)
		{
			return Ok(await _tableService.GetTableByID(Id));
		}

		[HttpPost]
		[Route("addtable")]
		public async Task<IActionResult> Post(TableModel table)
		{
			var result = await _tableService.InsertTable(table);
			if (result.TableId == null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
			}
			return Ok(result);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(Guid id, [FromBody] TableModel table)
		{
			await _tableService.UpdateTable(table);
			return Ok();
		}

		[HttpDelete("{id}")]
		public JsonResult Delete(Guid id)
		{
			var result = _tableService.DeleteTable(id);
			return new JsonResult("Deleted Successfully");
		}
	}
}
