using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http.ExceptionHandling;

namespace Helper.Middlewares
{
	public class GlobalExceptionHandlingMiddleware : IExceptionHandler
	{
		public Task HandleAsync(ExceptionHandlerContext context, CancellationToken cancellationToken)
		{
			throw new NotImplementedException();
		}
	}
}
