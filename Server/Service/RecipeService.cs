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
    public class RecipeService : IRecipeService
	{
		private readonly DataContext _appDBContext;
		public RecipeService(DataContext context)
		{
			_appDBContext = context ??
			   throw new ArgumentNullException(nameof(context));
		}

		public bool DeleteRecipe(Guid ID)
		{
			bool result = false;
			var recipes = _appDBContext.Recipes.Find(ID);
			if (recipes != null)
			{
				_appDBContext.Entry(recipes).State = EntityState.Deleted;
				_appDBContext.SaveChanges();
				result = true;
			}
			else
			{
				result = false;
			}
			return result;
		}

		public async Task<RecipeModel> GetRecipeByID(Guid ID)
		{
			return await _appDBContext.Recipes.FindAsync(ID);
		}

		public async Task<IEnumerable<RecipeModel>> GetRecipes()
		{
			return await _appDBContext.Recipes.ToListAsync();
		}

		public async Task<RecipeModel> InsertRecipe(RecipeModel objRecipe)
		{
			_appDBContext.Recipes.Add(objRecipe);
			await _appDBContext.SaveChangesAsync();
			return objRecipe;
		}

		public async Task<RecipeModel> UpdateRecipe(RecipeModel objRecipe)
		{
			_appDBContext.Entry(objRecipe).State = EntityState.Modified;
			await _appDBContext.SaveChangesAsync();
			return objRecipe;
		}
	}
}
