using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IService
{
    public interface ITableService
	{
		Task<IEnumerable<TableModel>> GetTables();
		Task<TableModel> GetTableByID(Guid ID);
		Task<TableModel> InsertTable(TableModel objTable);
		Task<TableModel> UpdateTable(TableModel objTable);
		bool DeleteTable(Guid ID);
	}
}
