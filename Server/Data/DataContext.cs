using Microsoft.EntityFrameworkCore;
using Models.Customer;
using Models.Department;
using Models.Employee;
using Models.Login;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<UserModel> Users
        {
            get;
            set;
        }

        public DbSet<DepartmentModel> Departments
        {
            get;
            set;
        }

        public DbSet<EmployeeModel> Employees
        {
            get;
            set;
        }

        public DbSet<CustomerModel> Customers
        {
            get;
            set;
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>().ToTable("Users");
            modelBuilder.Entity<DepartmentModel>().ToTable("Department");
            modelBuilder.Entity<EmployeeModel>().ToTable("Employee");
            modelBuilder.Entity<CustomerModel>().ToTable("Customer");
        }
    }
}
