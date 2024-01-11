using Helper.TokenAuthentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AutheticateController : ControllerBase
	{
		private readonly ITokenManager _tokenManager;

		public AutheticateController(ITokenManager tokenManager)
		{
			this._tokenManager = tokenManager;
		}

		[HttpGet]
		public IActionResult Authentication(string userName, string password) {
			if (_tokenManager.Authenticate(userName,password))
			{
				return Ok(new { Token = _tokenManager.NewToken() });
			}
			else
			{
				ModelState.AddModelError("UnAuthorized", "Your are not unauthorized.");
				return Unauthorized(ModelState);
			}
		}
	}
}
