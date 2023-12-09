using Models.Department;
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
        Task<DepartmentModel> GetDepartmentByID(int ID);
        Task<DepartmentModel> InsertDepartment(DepartmentModel objDepartment);
        Task<DepartmentModel> UpdateDepartment(DepartmentModel objDepartment);
        bool DeleteDepartment(int ID);
    }
}
