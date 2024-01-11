using Helper.Filters;
using IService;
using Microsoft.AspNetCore.Mvc;
using Models.Employee;
using Models.RecipeCategory;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RecipeCategoryController : ControllerBase
	{
		private readonly IRecipeCategoryService _recipeCatgeoryService;
		public RecipeCategoryController(IRecipeCategoryService recipeCategoryService)
		{
			_recipeCatgeoryService = recipeCategoryService ??
				throw new ArgumentNullException(nameof(recipeCategoryService));
		}

		[HttpGet]
		[Route("getrecipecategory")]
		public async Task<IActionResult> Get()
		{
			return Ok(await _recipeCatgeoryService.GetRecipeCategories());
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetRecipeCategoryByID(Guid Id)
		{
			return Ok(await _recipeCatgeoryService.GetRecipeCategoriesByID(Id));
		}

		[HttpPost]
		[Route("addrecipecategory")]
		public async Task<IActionResult> Post(RecipeCategoryModel recipeCategory)
		{
			var result = await _recipeCatgeoryService.InsertRecipeCategory(recipeCategory);
			if (result.RecipeCategoryId == null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
			}
			return Ok(result);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(Guid id, [FromBody] RecipeCategoryModel recipeCategory)
		{
			await _recipeCatgeoryService.UpdateRecipeCategory(recipeCategory);
			return Ok();
		}

		[HttpDelete("{id}")]
		public JsonResult Delete(Guid id)
		{
			var result = _recipeCatgeoryService.DeleteRecipeCategory(id);
			return new JsonResult("Deleted Successfully");
		}
	}
}
