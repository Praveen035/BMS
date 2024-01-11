using Models.Employee;
using Models.Recipe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IService
{
	public interface IRecipeService
	{
		Task<IEnumerable<RecipeModel>> GetRecipes();
		Task<RecipeModel> GetRecipeByID(Guid ID);
		Task<RecipeModel> InsertRecipe(RecipeModel objEmployee);
		Task<RecipeModel> UpdateRecipe(RecipeModel objEmployee);
		bool DeleteRecipe(Guid ID);
	}
}
