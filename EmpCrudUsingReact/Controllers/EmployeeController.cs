using EmployeeCRUDusingREACT.Models;
using EmployeeCRUDusingREACT.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeCRUDusingREACT.Controllers
{
    public class EmployeeController : Controller
    {

        private readonly IEmployeeService employeeService;
        public EmployeeController(IEmployeeService _employeeService)
        {
            employeeService = _employeeService;
        }
        [HttpGet("EmployeeList")]
        public IEnumerable<Employee> EmployeeList()
        {
            var employeeList = employeeService.GetEmployees();
            return employeeList;
        }
        [HttpGet("getEmployeebyid")]
        public Employee GetEmployeeById(int Id)
        {
            return employeeService.GetEmployeeById(Id);
        }
        [HttpPost("addEmployee")]
        public Employee AddEmployee(Employee employee)
        {
            return employeeService.AddEmployee(employee);
        }
        [HttpPut("updateEmployee")]
        public Employee UpdateEmployee(Employee employee)
        {
            return employeeService.UpdateEmployee(employee);
        }
        [HttpDelete("deleteEmployee")]
        public bool DeleteEmployee(int Id)
        {
            return employeeService.DeleteEmployee(Id);
        }
    }
}
