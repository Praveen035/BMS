using Helper.TokenAuthentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.Controllers;

namespace Helper.Filters
{
	public class TokenAuthenticationFilter : Attribute, IAuthorizationFilter
	{
		public void OnAuthorization(AuthorizationFilterContext filterContext)
		{
			var tokenManager=(ITokenManager)filterContext.HttpContext.RequestServices.GetService(typeof(ITokenManager))!;

			var result = true;
			if (!filterContext.HttpContext.Request.Headers.ContainsKey("Authorization"))
				result = false;

			string token= string.Empty;
			if (result)
			{
				token = filterContext.HttpContext.Request.Headers.First(x => x.Key == "Authorization").Value;
				if(!tokenManager.VerifyToken(token))
					result= false;
			}

			if(!result) {
				filterContext.ModelState.AddModelError("UnAuthorized", "You are not authorized.");
				filterContext.Result= new UnauthorizedObjectResult(filterContext.ModelState);	
			}
		}
	}
}
