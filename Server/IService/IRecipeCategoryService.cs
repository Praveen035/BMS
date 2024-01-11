using Models.Recipe;
using Models.RecipeCategory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IService
{
	public interface IRecipeCategoryService
	{
		Task<IEnumerable<RecipeCategoryModel>> GetRecipeCategories();
		Task<RecipeCategoryModel> GetRecipeCategoriesByID(Guid ID);
		Task<RecipeCategoryModel> InsertRecipeCategory(RecipeCategoryModel objEmployee);
		Task<RecipeCategoryModel> UpdateRecipeCategory(RecipeCategoryModel objEmployee);
		bool DeleteRecipeCategory(Guid ID);
	}
}
