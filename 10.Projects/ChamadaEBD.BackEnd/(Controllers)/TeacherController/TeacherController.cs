using Microsoft.AspNetCore.Mvc;

namespace ChamadaEBD.BackEnd
{
    [ApiController]
    [Route("[Controller]")]
    public class TeacherController : CrudControllerBase<Teacher>
    {
        public TeacherController(IUnitOfWork unitOfWork) : base(unitOfWork)
        {
        }
    }
}
