using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IService
{
    public interface IEmployeeService
    {
        Task<IEnumerable<EmployeeModel>> GetEmployees();
        Task<EmployeeModel> GetEmployeeByID(Guid ID);
        Task<EmployeeModel> InsertEmployee(EmployeeModel objEmployee);
        Task<EmployeeModel> UpdateEmployee(EmployeeModel objEmployee);
        bool DeleteEmployee(Guid ID);
    }
}
