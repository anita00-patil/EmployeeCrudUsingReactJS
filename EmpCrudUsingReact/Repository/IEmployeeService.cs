using EmployeeCRUDusingREACT.Models;

namespace EmployeeCRUDusingREACT.Repository
{
    public interface IEmployeeService
    {
        public IEnumerable<Employee> GetEmployees();
        public Employee GetEmployeeById(int id);
        public Employee AddEmployee(Employee employee);
        public Employee UpdateEmployee(Employee employee);
        public bool DeleteEmployee(int id);

    }
}
