using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : CrudControllerBase<Student>
    {
        public StudentController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
