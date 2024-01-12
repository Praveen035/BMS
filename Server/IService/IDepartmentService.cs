using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IService
{
    public interface IDepartmentService
    {
        Task<IEnumerable<DepartmentModel>> GetDepartment();
        Task<DepartmentModel> GetDepartmentByID(Guid ID);
        Task<DepartmentModel> InsertDepartment(DepartmentModel objDepartment);
        Task<DepartmentModel> UpdateDepartment(DepartmentModel objDepartment);
        bool DeleteDepartment(Guid ID);
    }
}
