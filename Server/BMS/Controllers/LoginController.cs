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

        [HttpPost("authenticated")]
        public async Task<IActionResult> Authenticated([FromBody] UserModel userObj)
        {
            if (userObj == null)
                return BadRequest();

            var user = await _authContext.Users
                .FirstOrDefaultAsync(x => x.Username == userObj.Username);

            if (user == null)
                return NotFound(new { Message = "User not found!" });
           
            return Ok(userObj);
        }


        [HttpPost("register")]
        public async Task<IActionResult> AddUser([FromBody] UserModel userObj)
        {
            if (userObj == null)
                return BadRequest();
           
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
