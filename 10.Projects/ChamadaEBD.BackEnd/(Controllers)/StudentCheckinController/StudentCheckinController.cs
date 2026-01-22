using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[controller]")]
    public class StudentCheckinController : CrudControllerBase<StudentCheckin>
    {
        public StudentCheckinController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
