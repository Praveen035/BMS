using IService;
using Microsoft.AspNetCore.Mvc;
using Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ReservationController : ControllerBase
	{
		private readonly IReservationService _reservationService;
	
		public ReservationController(IReservationService reservationService)
		{
			_reservationService = reservationService ??
				throw new ArgumentNullException(nameof(reservationService));
		}

		[HttpGet]
		[Route("getReservation")]
		public async Task<IActionResult> Get()
		{
			return Ok(await _reservationService.GetReservations());
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetReservationByID(Guid Id)
		{
			return Ok(await _reservationService.GetReservationByID(Id));
		}

		[HttpPost]
		[Route("addreservation")]
		public async Task<IActionResult> Post(ReservationModel res)
		{
			var result = await _reservationService.InsertReservation(res);
			if (result.ReservationId == null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
			}
			return Ok(result);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(Guid id, [FromBody] ReservationModel res)
		{
			await _reservationService.UpdateReservation(res);
			return Ok();
		}

		[HttpDelete("{id}")]
		public JsonResult Delete(Guid id)
		{
			var result = _reservationService.DeleteReservation(id);
			return new JsonResult("Deleted Successfully");
		}
		
	}
}
