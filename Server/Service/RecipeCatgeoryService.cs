using Data;
using IService;
using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class RecipeCatgeoryService : IRecipeCategoryService
	{
		private readonly DataContext _appDBContext;
		public RecipeCatgeoryService(DataContext context)
		{
			_appDBContext = context ??
			   throw new ArgumentNullException(nameof(context));
		}

		public bool DeleteRecipeCategory(Guid ID)
		{
			bool result = false;
			var recipeCategories = _appDBContext.RecipeCategories.Find(ID);
			if (recipeCategories != null)
			{
				_appDBContext.Entry(recipeCategories).State = EntityState.Deleted;
				_appDBContext.SaveChanges();
				result = true;
			}
			else
			{
				result = false;
			}
			return result;
		}

		public async Task<IEnumerable<RecipeCategoryModel>> GetRecipeCategories()
		{
			return await _appDBContext.RecipeCategories.ToListAsync();
		}

		public async Task<RecipeCategoryModel> GetRecipeCategoriesByID(Guid ID)
		{
			return await _appDBContext.RecipeCategories.FindAsync(ID);
		}

		public async Task<RecipeCategoryModel> InsertRecipeCategory(RecipeCategoryModel objRecCat)
		{
			_appDBContext.RecipeCategories.Add(objRecCat);
			await _appDBContext.SaveChangesAsync();
			return objRecCat;
		}

		public async Task<RecipeCategoryModel> UpdateRecipeCategory(RecipeCategoryModel objRecipeCat)
		{
			_appDBContext.Entry(objRecipeCat).State = EntityState.Modified;
			await _appDBContext.SaveChangesAsync();
			return objRecipeCat;
		}
	}
}
