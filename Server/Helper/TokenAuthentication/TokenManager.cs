using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Helper.TokenAuthentication
{
	public class TokenManager : ITokenManager
	{
		private List<Token> listTokens;

		public TokenManager()
		{
			listTokens = new List<Token>();
		}

		public bool Authenticate(string userName, string password)
		{

			if (!string.IsNullOrEmpty(userName) && !string.IsNullOrEmpty(password) && userName.ToLower() == "admin" && password == "password")
			{
				return true;
			}
			else { return false; }
		}

		public Token NewToken()
		{
			var token = new Token
			{
				Value = Guid.NewGuid().ToString(),
				ExpireDate = DateTime.Now.AddMinutes(2)
			};

			listTokens.Add(token);
			return token;
		}

		public bool VerifyToken(String token)
		{
			if (listTokens.Any(x => x.Value == token && x.ExpireDate > DateTime.Now))
			{
				return true;
			}
			return false;
		}
	}
}
