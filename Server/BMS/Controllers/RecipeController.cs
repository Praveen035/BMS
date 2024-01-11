using Helper.Filters;
using IService;
using Microsoft.AspNetCore.Mvc;
using Models.Customer;
using Models.Recipe;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RecipeController : ControllerBase
	{
		private readonly IRecipeService _recipeService;

		public RecipeController(IRecipeService recipeService)
		{
			_recipeService = recipeService ??
				throw new ArgumentNullException(nameof(recipeService));
		}

		[HttpGet]
		[Route("getrecipe")]
		public async Task<IActionResult> Get()
		{
			return Ok(await _recipeService.GetRecipes());
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetEmpByID(Guid Id)
		{
			return Ok(await _recipeService.GetRecipeByID(Id));
		}

		[HttpPost]
		[Route("addrecipe")]
		public async Task<IActionResult> Post(RecipeModel recipe)
		{
			recipe.RecipeId = Guid.NewGuid();
			var result = await _recipeService.InsertRecipe(recipe);
			if (result.RecipeId == null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
			}
			return Ok(result);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(Guid id, [FromBody] RecipeModel recipe)
		{
			await _recipeService.UpdateRecipe(recipe);
			return Ok("Updated Successfully");
		}

		[HttpDelete("{id}")]
		public JsonResult Delete(Guid id)
		{
			var result = _recipeService.DeleteRecipe(id);
			return new JsonResult("Deleted Successfully");
		}
	}
}
