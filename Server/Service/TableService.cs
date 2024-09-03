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
    public class TableService : ITableService
	{
		private readonly DataContext _appDBContext;
		public TableService(DataContext context)
		{
			_appDBContext = context ??
			   throw new ArgumentNullException(nameof(context));
		}

		public bool DeleteTable(Guid ID)
		{
			bool result = false;
			var table = _appDBContext.Tables.Find(ID);
			if (table != null)
			{
				_appDBContext.Entry(table).State = EntityState.Deleted;
				_appDBContext.SaveChanges();
				result = true;
			}
			else
			{
				result = false;
			}
			return result;
		}

		public async Task<TableModel> GetTableByID(Guid ID)
		{
			return await _appDBContext.Tables.FindAsync(ID);
		}

		public async Task<IEnumerable<TableModel>> GetTables()
		{
			try
			{
			 var result = await _appDBContext.Tables.ToListAsync();
			 return result;
			}
			catch (Exception exe)
			{
				throw;
			}
		}

		public async Task<TableModel> InsertTable(TableModel objTable)
		{
			_appDBContext.Tables.Add(objTable);
			await _appDBContext.SaveChangesAsync();
			return objTable;
		}

		public async Task<TableModel> UpdateTable(TableModel objTable)
		{
			_appDBContext.Entry(objTable).State = EntityState.Modified;
			await _appDBContext.SaveChangesAsync();
			return objTable;
		}
	}
}
