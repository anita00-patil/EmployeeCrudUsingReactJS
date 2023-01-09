
using EmployeeCRUDusingREACT.Controllers;
using EmployeeCRUDusingREACT.Models;
using EmployeeCRUDusingREACT.Repository;
using Moq;

namespace CrudTesting
{
    public class UnitTestController
    {
        private readonly Mock<IEmployeeService> employeeService;
        public UnitTestController()
        {
            employeeService = new Mock<IEmployeeService>();
        }
        [Fact]
        public void GetEmployeeList_EmployeeList()
        {
            //arrange
            var employeeList = GetEmployeesData();
            employeeService.Setup(x => x.GetEmployees())
                .Returns(employeeList);
            var employeeController = new EmployeeController(employeeService.Object);

            //act
            var employeeResult = employeeController.EmployeeList();

            //assert
            Assert.NotNull(employeeResult);
            Assert.Equal(GetEmployeesData().Count(), employeeResult.Count());
            Assert.Equal(GetEmployeesData().ToString(), employeeResult.ToString());
            Assert.True(employeeList.Equals(employeeResult));
        }
        [Fact]
        public void GetEmployeeByID_Employee()
        {
            //arrange
            var employeeList = GetEmployeesData();
            employeeService.Setup(x => x.GetEmployeeById(2))
                .Returns(employeeList[1]);
            var employeeController = new EmployeeController(employeeService.Object);

            //act
            var employeeResult = employeeController.GetEmployeeById(2);

            //assert
            Assert.NotNull(employeeResult);
            Assert.Equal(employeeList[1].EmployeeId, employeeResult.EmployeeId);
            Assert.True(employeeList[1].EmployeeId == employeeResult.EmployeeId);
        }
        [Theory]
        [InlineData("Anita")]
        public void CheckEmployeeExistOrNotByName_Employee(string name)
        {
            //arrange
            var employeeList = GetEmployeesData();
            employeeService.Setup(x => x.GetEmployees())
                .Returns(employeeList);
            var employeeController = new EmployeeController(employeeService.Object);

            //act
            var employeeResult = employeeController.EmployeeList();
            var expectedEmployeeName = employeeResult.ToList()[0].Name;

            //assert
            Assert.Equal(name, expectedEmployeeName);
        }

        [Fact]
        public void AddEmployee_Employee()
        {
            //arrange
            var employeeList = GetEmployeesData();
            employeeService.Setup(x => x.AddEmployee(employeeList[1]))
                .Returns(employeeList[1]);
            var employeeController = new EmployeeController(employeeService.Object);

            //act
            var employeeResult = employeeController.AddEmployee(employeeList[1]);

            //assert
            Assert.NotNull(employeeResult);
            Assert.Equal(employeeList[1].EmployeeId, employeeResult.EmployeeId);
            Assert.True(employeeList[1].EmployeeId == employeeResult.EmployeeId);
        }

        private List<Employee> GetEmployeesData()
        {
            List<Employee> EmployeesData = new List<Employee>
        {
            new Employee
            {
               EmployeeId=1,
               Name="Anita",
               Band="Band X",
               Role="Trainee Engineer",
               Designation="Taking individual part in a tarinee program",
               Responsibilities="Attending Meetings",
               HiredDate=new DateTime(2022-08-22)
            },
             new Employee
            {
               EmployeeId=2,
               Name="Ashish Mishra",
               Band="Band 2",
               Role="Tech Lead",
               Designation="Developer",
               Responsibilities="To handle belowed Team",
               HiredDate=new DateTime(2015-03-21)
            },

        };
            return EmployeesData;
        }
    }
}