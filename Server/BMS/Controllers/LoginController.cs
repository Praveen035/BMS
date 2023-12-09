using Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Login;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DataContext _authContext;
        public LoginController(DataContext context)
        {
            _authContext = context;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] UserModel userObj)
        {
            if (userObj == null)
                return BadRequest();

            var user = await _authContext.Users
                .FirstOrDefaultAsync(x => x.Username == userObj.Username);

            if (user == null)
                return NotFound(new { Message = "User not found!" });

            //if (!PasswordHasher.VerifyPassword(userObj.Password, user.Password))
            //{
            //    return BadRequest(new { Message = "Password is Incorrect" });
            //}

            //user.Token = CreateJwt(user);
            //var newAccessToken = user.Token;
            //var newRefreshToken = CreateRefreshToken();
            //user.RefreshToken = newRefreshToken;
            //user.RefreshTokenExpiryTime = DateTime.Now.AddDays(5);
            //await _authContext.SaveChangesAsync();

            //return Ok(new TokenApiDto()
            //{
            //    AccessToken = newAccessToken,
            //    RefreshToken = newRefreshToken
            //});
            return Ok(userObj);
        }


        [HttpPost("register")]
        public async Task<IActionResult> AddUser([FromBody] UserModel userObj)
        {
            if (userObj == null)
                return BadRequest();

            // check email
            //if (await CheckEmailExistAsync(userObj.Email))
            //    return BadRequest(new { Message = "Email Already Exist" });

            ////check username
            //if (await CheckUsernameExistAsync(userObj.Username))
            //    return BadRequest(new { Message = "Username Already Exist" });

            //var passMessage = CheckPasswordStrength(userObj.Password);
            //if (!string.IsNullOrEmpty(passMessage))
            //    return BadRequest(new { Message = passMessage.ToString() });

            //userObj.Password = PasswordHasher.HashPassword(userObj.Password);
            //userObj.Role = "User";
            //userObj.Token = "";
            await _authContext.Users.AddAsync(userObj);
            await _authContext.SaveChangesAsync();
            return Ok(new
            {
                Status = 200,
                Message = "User Added!"
            });
        }
    }
}
