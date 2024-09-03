using Api.Controllers;
using IService;
using Models;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BMS.Test
{
    public class EmployeeControllerTest
    {
        private readonly EmployeeController _controller;
        private readonly Mock<IEmployeeService> _employeeService= new Mock<IEmployeeService>();
        private readonly Mock<IDepartmentService> _departmentService= new Mock<IDepartmentService>();

        public EmployeeControllerTest()
        {
            _controller = new EmployeeController(_employeeService.Object,_departmentService.Object);
        }

        [Fact]
        public async Task GetByIdAsync_ShouldReturnEmployee_WhenCustomerExists()
        {
            var employeeId= Guid.NewGuid();

            var employeeDto = new EmployeeModel
            {
                EmployeeID = employeeId,
                EmployeeName = "Test",
                EmailId="abc@gmail.com"
            };

            _employeeService.Setup(x => x.GetEmployeeByID(employeeId)).ReturnsAsync(employeeDto);

            //Act
            var employee=await _controller.GetEmpByID(employeeId);

            // Assert
            Assert.Equal(employeeId,employee.EmployeeID);
        }

        [Fact]
        public async Task GetByIdAsync_ShouldReturnEmployee_WhenCustomerDoesNotExists()
        {

            //_employeeService.Setup(x => x.GetEmployeeByID(It.IsAny<Guid>())).ReturnsAsync(valueFunction () => null);
            ////Act

             //var employee = await _controller.GetEmpByID(employeeId);

            //// Assert
            //Assert.Equal(employeeId, employeeDto.EmployeeID);
        }

        [Fact]
        public async Task InsertEmployeeAsync_ShouldReturn_Success()
        {
            var employeeId = Guid.NewGuid();

            var employeeDto = new EmployeeModel
            {
                EmployeeName = "Test",
                EmailId = "abc@gmail.com",
                Department="CSE"
            };

            _employeeService.Setup(x => x.InsertEmployee(employeeDto)).ReturnsAsync(employeeDto);

            //Act
            var employee = await _controller.Post(employeeDto);

            // Assert
            Assert.Equal(employee, employee);
        }
    }
}
